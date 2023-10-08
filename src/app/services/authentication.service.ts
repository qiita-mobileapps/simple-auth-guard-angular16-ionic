import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { StorageClientKeyService } from './storage-clientkey.service';
import { AccessData } from '../interfaces/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private storageCert: StorageClientKeyService
  ) { }

  isAuthorized() {
    return this.getAccessClientKey().pipe(map(clientkey => !!clientkey));
  }

  getAccessClientKey() {
    const clientkey = this.storageCert.getClientKey();
    return of(clientkey);
  }

  refreshShouldHappen(response: HttpErrorResponse) {
    return response.status === 401;
  }

  verifyRefreshClientKey(req: HttpRequest<any>) {
    return req.url.endsWith(environment.URLPATH_ENDPOINT_REFRESH);
  }

  refreshClientKey() {
    const refreshClientKey = this.storageCert.getRefreshClientKey();

    return this.http.post<AccessData>( environment.URL_ENDPOINT_ADDRESS + environment.URLPATH_ENDPOINT_REFRESH, { refreshClientKey }).pipe(
      tap((refreshClientKey: AccessData) => this.saveAccessData(refreshClientKey)),
      catchError((err) => {
        this.logout();

        return throwError(() => err);
      })
    );
  }

  login(): Observable<any> {
    return this.http.post<AccessData>(environment.URL_ENDPOINT_ADDRESS + environment.URLPATH_ENDPOINT_LOGIN, {})
      .pipe(
        tap((keys: AccessData) => this.saveAccessData(keys)),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            console.log('login failer.');
          }
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    this.storageCert.clear();
    location.reload();
  }

  private saveAccessData({ accessClientKey, refreshClientKey }: AccessData) {
    this.storageCert.setClientKey(accessClientKey);
    this.storageCert.setRefreshClientKey(refreshClientKey);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  getTransactions(path: string) {
    return this.http.get(environment.URL_ENDPOINT_ADDRESS + path);
  }

}

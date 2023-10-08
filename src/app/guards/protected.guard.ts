import { DOCUMENT } from '@angular/common';
import { Inject, inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService} from '../services/authentication.service';
import { environment } from '../../environments/environment';

export const protectedGuard: CanActivateFn = (_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const guard = inject(ProtectedGuard);
  return guard.canActivate(state);
};

@Injectable({
  providedIn: 'root'
})
export class ProtectedGuard {

  constructor(
    private authService: AuthenticationService,
    @Inject(DOCUMENT) private readonly document: Document,
    private router: Router
  ) { }

  canActivate(state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthorized()
      .pipe(map((isAuthorized: boolean) => {
        if (!isAuthorized) {
          this.navigate(environment.URLPATH_FRONTEND_LOGIN);
          return false;
        }
        return true;
      }));
  }

  private navigate(url: string): void {
    if (url.startsWith('http')) {
      this.document.location.href = url;
    } else {
      this.router.navigateByUrl(url);
    }
  }

}


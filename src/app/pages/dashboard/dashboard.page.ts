import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'
import { DataAccessService} from '../../services/data-access.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data$!: Observable<any>;

  ngOnInit() {
  }

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private dataAccess: DataAccessService
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl(environment.URLPATH_FRONTEND_HOME);
  }

  doCommand() {
    this.data$ = 
      this.dataAccess.getTransactions(environment.URLPATH_ENDPOINT_DATA);
  }

}

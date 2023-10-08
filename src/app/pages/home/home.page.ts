import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goLogin() {
    this.router.navigateByUrl(environment.URLPATH_FRONTEND_LOGIN);
  }

}

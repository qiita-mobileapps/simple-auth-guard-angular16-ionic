import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  login() {
    this.authService.login()
      .subscribe(() => this.router.navigateByUrl('/dashboard'));
  }
  
}

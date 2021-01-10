import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService,
    public router: Router ) { }

  ngOnInit() {
	}

	logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
			.then(() => { this.router.navigate(['channels']);}).catch((error) => {window.alert(error.message)})
  }

}

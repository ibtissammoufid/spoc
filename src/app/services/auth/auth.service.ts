import { Injectable } from '@angular/core';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	constructor(private ngFireAuth: AngularFireAuth) {
	}

	SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

}

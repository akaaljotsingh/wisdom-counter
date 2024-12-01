import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    // Initialize Firebase
    // AngularFireModule.initializeApp(environment.firebaseConfig);
    initializeApp(environment.firebaseConfig);

  }

  // Google login function
  async googleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      // Handle successful login
    } catch (error) {
      // Handle login errors
    }
  }

  // Logout function
  logout() {
    return this.afAuth.signOut();
  }

  getUserDetails(): Observable<any> {
    return this.afAuth.authState;
  }
}

import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuth } from 'capacitor-google-auth';
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
  // async googleLogin() {
  //   try {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     await this.afAuth.signInWithRedirect(provider);
  //     // Handle successful login
  //   } catch (error) {
  //     // Handle login errors
  //   }
  // }

  async googleLogin() {
    try {
      const user = await GoogleAuth.signIn();
      console.log('Signed in user:', user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  }

  // Logout function
  // logout() {
  //   return this.afAuth.signOut();
  // }
  async logout() {
    // await GoogleAuth.signOut();
    await this.afAuth.signOut();
    console.log('User signed out');
    try {
      await GoogleAuth.signOut(); // This will sign out the user from Google
      console.log('User signed out from Google');
    } catch (error) {
      console.error('Error signing out from Google:', error);
    }
  }

  getUserDetails(): Observable<any> {
    return this.afAuth.authState;
  }
}

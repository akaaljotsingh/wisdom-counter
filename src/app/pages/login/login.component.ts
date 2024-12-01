import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    // AngularFireModule.initializeApp(yourFirebaseConfig)
  ],
  providers: [AuthService,AngularFireAuth]
})
export class LoginComponent  implements OnInit {

  user: any;

  constructor(private firebaseService: AuthService, private afAuth: AngularFireAuth, private router: Router) {
    AngularFireModule.initializeApp(environment.firebaseConfig);
    // Subscribe to the auth state
    this.afAuth.authState.subscribe((user:any) => {
      this.user = user;
      console.log("🚀 ~ LoginComponent ~ this.afAuth.authState.subscribe ~ this.user:", this.user)
    });
  }

  ngOnInit(): void {
    
  }

  // Google login function
  googleLogin() {
    this.firebaseService.googleLogin()
      .then((result) => {
        this.router.navigateByUrl('/counter')
      })
      .catch((error) => {
        console.error("Google login error", error);
      });
  }

  // Google logout function
  logout() {
    this.firebaseService.logout()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  }

}

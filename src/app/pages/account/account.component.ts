import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
// import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AccountComponent  implements OnInit {
  userDetails: any;

  constructor(
    private nav: Router,
    private afAuth: AngularFireAuth,
    private auth:AuthService
  ) {}
  ngOnInit() {
    this.auth.getUserDetails().subscribe((user) => {
      this.userDetails = user; // Save the user details for use in the component
    });
  }

  ionViewWillEnter() {
    this.auth.getUserDetails().subscribe((user) => {
      this.userDetails = user; // Save the user details for use in the component
    });
  }

  login() {
    
  }

  logout() {
    this.nav.navigateByUrl('/');
    this.afAuth.signOut();
  }

}

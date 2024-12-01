import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Adjust based on your Firebase version
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user), // Convert user object to boolean (true if logged in)
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']); // Redirect to login if not authenticated
        }
      })
    );
  }
}

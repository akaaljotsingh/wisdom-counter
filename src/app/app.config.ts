import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideRouter } from '@angular/router';
import { environment } from 'src/environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    AngularFireAuthModule,
    provideRouter(routes),
    // Provide Firebase app configuration
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    { 
      provide: FIREBASE_OPTIONS,
      useValue: environment.firebaseConfig 
    }
  ]
};

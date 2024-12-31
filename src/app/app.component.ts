import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared/shared.service';
import { TabsPage } from "./tabs/tabs.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TabsPage,
  ],
})
export class AppComponent {

  showTabs: boolean = true;

  selectedHistoryEntry: { name: string; count: number } | null = null;

  // constructor(private router: Router, private sharedService: SharedService) {}
  constructor(private router: Router, private sharedService: SharedService) {
    // AngularFireModule.initializeApp(environment.firebaseConfig);
  }

  ngOnInit() {
    
  }


  // handleContinueFromHistory(entry: { name: string; count: number }) {
  //   this.sharedService.setSelectedEntry(entry);
  //   this.router.navigate(['/counter']);
  // }
}

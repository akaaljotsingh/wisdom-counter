import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SharedService } from './shared/shared.service';
import { TabsPage } from "./tabs/tabs.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TabsPage],
})
export class AppComponent {

  selectedHistoryEntry: { name: string; count: number } | null = null;

  constructor(private router: Router, private sharedService: SharedService) {}

  handleContinueFromHistory(entry: { name: string; count: number }) {
    this.sharedService.setSelectedEntry(entry);
    this.router.navigate(['/counter']);
  }
}

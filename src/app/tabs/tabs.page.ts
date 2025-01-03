import { Component, EnvironmentInjector, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, planet, time } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  showTabs: boolean = false;

  constructor(private router: Router) {
    addIcons({ time, planet, person });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is 'login'
        // this.showTabs = !event.url.includes('/login');
      }
    });
  }

  changeRoute(path:any) {
    localStorage.setItem('selectedEntry', '')
    if(path == 'counter') {
      this.router.navigate(['counter'], { replaceUrl: true });
    }
    if(path == 'history') {
      this.router.navigate(['history'], { replaceUrl: true });
    }
    if(path == 'account') {
      this.router.navigate(['account'], { replaceUrl: true });
    }

  }
}

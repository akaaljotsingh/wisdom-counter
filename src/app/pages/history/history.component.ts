import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // <-- Import IonicModule
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],

})
export class HistoryComponent  implements OnInit {
  countHistory: { name: string; count: number }[] = [];

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('countHistory');
    if (savedHistory) {
      this.countHistory = JSON.parse(savedHistory);
    }
  }

  ionViewWillEnter() {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('countHistory');
    if (savedHistory) {
      this.countHistory = JSON.parse(savedHistory);
    }
  }

  deleteCount(index: number) {
    this.countHistory.splice(index, 1);
    // Update localStorage after deletion
    localStorage.setItem('countHistory', JSON.stringify(this.countHistory));
  }

  continueWithCount(index: number) {
    const selectedItem = this.countHistory[index];
    this.sharedService.setSelectedEntry(selectedItem);
    this.router.navigate(['/counter']); // Navigate to counter view
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedService } from 'src/app/shared/shared.service';
import { HistoryComponent } from "../history/history.component";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule
  ],
  providers: [SharedService]
})
export class CounterComponent  implements OnInit {

  count: number = 0;
  userName: string = '';
  countHistory: { name: string; count: number }[] = [];
isPressed: any;
  saved: boolean = false;

  constructor(private sharedService: SharedService){}

  ngOnInit() {
    let selectedEntry:any = localStorage.getItem('selectedEntry') ? localStorage.getItem('selectedEntry') : null;
    selectedEntry = selectedEntry ? JSON.parse(selectedEntry) : null;
    console.log("🚀 ~ CounterComponent ~ ngOnInit ~ selectedEntry:", selectedEntry)
    if (selectedEntry) {
      this.userName = selectedEntry.name;
      this.count = selectedEntry.count;
    }
  }

  ionViewWillEnter() {
    let selectedEntry:any = localStorage.getItem('selectedEntry') ? localStorage.getItem('selectedEntry') : null;
    selectedEntry = selectedEntry ? JSON.parse(selectedEntry) : null;
    console.log("🚀 ~ CounterComponent ~ ngOnInit ~ selectedEntry:", selectedEntry)
    if (selectedEntry) {
      this.userName = selectedEntry.name;
      this.count = selectedEntry.count;
    }
  }

  incrementCount() {
    if (this.count < 9999) {
      this.count++;
    }
    let countHistory: { name: string; count: number }[] = [];
    const savedHistory = localStorage.getItem('countHistory');
    if (savedHistory) {
      countHistory = JSON.parse(savedHistory);
    }
    const existingEntryIndex = countHistory.findIndex(entry => entry.name === this.userName);
  
    if (existingEntryIndex !== -1) {
      // Update the existing entry
      countHistory[existingEntryIndex].count = this.count;
    } else {
      // Add a new entry
      countHistory.push({ name: this.userName, count: this.count });
    }
  
    // Save the updated history back to localStorage
    localStorage.setItem('countHistory', JSON.stringify(countHistory));
  }

  resetCount() {
    this.count = 0;

    let countHistory: { name: string; count: number }[] = [];
    const savedHistory = localStorage.getItem('countHistory');
    if (savedHistory) {
      countHistory = JSON.parse(savedHistory);
    }
    const existingEntryIndex = countHistory.findIndex(entry => entry.name === this.userName);
  
    if (existingEntryIndex !== -1) {
      // Update the existing entry
      countHistory[existingEntryIndex].count = this.count;
    } else {
      // Add a new entry
      countHistory.push({ name: this.userName, count: this.count });
    }
  
    // Save the updated history back to localStorage
    localStorage.setItem('countHistory', JSON.stringify(countHistory));
  }

  saveCount() {
    if (!this.userName.trim()) {
      alert('Please enter a name before saving.');
      return;
    }
  
    // Get the existing count history from localStorage
    let countHistory: { name: string; count: number }[] = [];
    const savedHistory = localStorage.getItem('countHistory');
    if (savedHistory) {
      countHistory = JSON.parse(savedHistory);
    }
  
    // Check if an entry with the same name exists
    const existingEntryIndex = countHistory.findIndex(entry => entry.name === this.userName);
  
    if (existingEntryIndex !== -1) {
      // Update the existing entry
      countHistory[existingEntryIndex].count = this.count;
    } else {
      // Add a new entry
      countHistory.push({ name: this.userName, count: this.count });
    }
  
    // Save the updated history back to localStorage
    localStorage.setItem('countHistory', JSON.stringify(countHistory));
    
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
    }, 2000);
  }
  

  deleteCount(index: number) {
    this.countHistory.splice(index, 1);
    this.updateLocalStorage();
  }

  continueWithCount(index: number) {
    this.count = this.countHistory[index].count;
    this.userName = this.countHistory[index].name;
  }

  private updateLocalStorage() {
    localStorage.setItem('countHistory', JSON.stringify(this.countHistory));
  }

}
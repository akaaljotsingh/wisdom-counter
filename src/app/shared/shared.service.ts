import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedEntry: { name: string; count: number } | null = null;

  setSelectedEntry(entry: { name: string; count: number }) {
    this.selectedEntry = entry;
    localStorage.setItem('selectedEntry', JSON.stringify(entry));
    console.log("🚀 ~ SharedService ~ setSelectedEntry ~ this.selectedEntry:", this.selectedEntry);
  }
  
  getSelectedEntry() {
    if (!this.selectedEntry) {
      const storedEntry = localStorage.getItem('selectedEntry');
      this.selectedEntry = storedEntry ? JSON.parse(storedEntry) : null;
    }
    console.log("🚀 ~ SharedService ~ getSelectedEntry ~ entry:", this.selectedEntry);
    return this.selectedEntry;
  }
  
}

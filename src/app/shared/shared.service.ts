import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedEntry: { name: string; count: number } | null = null;

  setSelectedEntry(entry: { name: string; count: number }) {
    this.selectedEntry = entry;
  }

  getSelectedEntry() {
    const entry = this.selectedEntry;
    this.selectedEntry = null; // Clear the value after retrieving
    return entry;
  }
}

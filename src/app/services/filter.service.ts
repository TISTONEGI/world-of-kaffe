import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterText: string = '';

  setFilter(text: string): void {
    this.filterText = text;
  }

  getFilter(): string {
    return this.filterText;
  }
}

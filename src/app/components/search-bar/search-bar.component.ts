import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<{ title: string; year: number }>();
  @Output() surprise = new EventEmitter<void>();

  searchTitle = '';
  searchYear: number | null = null;

  onSearchChange(): void {
    const searchCriteria = {
      title: this.searchTitle,
      year: this.searchYear || 0
    };
    this.search.emit(searchCriteria);
  }

  onSurprise(): void {
    this.surprise.emit();
  }

  resetSearch(): void {
    this.searchTitle = '';
    this.searchYear = null;
    this.onSearchChange();
  }
}
  


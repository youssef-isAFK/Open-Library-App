import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booksList: any[] = [];
  filteredBooks: any[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.booksList = data.works || [];
        this.filteredBooks = this.booksList;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading books:', error);
        this.errorMessage = 'Erreur lors du chargement des livres. Veuillez réessayer.';
        this.isLoading = false;
      }
    });
  }

  onSearch(searchCriteria: { title: string; year: number }): void {
    if (!searchCriteria.title && searchCriteria.year === 0) {
      this.filteredBooks = this.booksList;
      return;
    }

    this.filteredBooks = this.booksList.filter(book => {
      const titleMatch = !searchCriteria.title ||
        (book.title && book.title.toLowerCase().includes(searchCriteria.title.toLowerCase()));
      const yearMatch = !searchCriteria.year ||
        (book.first_publish_year && book.first_publish_year === searchCriteria.year);

      return titleMatch && (searchCriteria.year === 0 || yearMatch);
    });
  }

  viewBookDetails(book: any): void {
    // Extract the book ID from the key (e.g., /works/OL17365W -> OL17365W)
    const bookId = book.key.split('/')[2];
    this.router.navigate(['/book-details', bookId]);
  }

  onSurprise(): void {
    if (this.booksList.length === 0) {
      this.errorMessage = 'Aucun livre disponible pour la surprise.';
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.booksList.length);
    const randomBook = this.booksList[randomIndex];
    this.filteredBooks = [randomBook];
  }

  getCoverUrl(coverId: number): string {
    if (!coverId) {
      return 'assets/no-cover.png'; // Fallback image
    }
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  }}

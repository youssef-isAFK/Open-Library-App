import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any = {};
  bookId: string = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.loadBookDetails();
      }
    });
  }

  loadBookDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.bookService.getBookById(this.bookId).subscribe({
      next: (data) => {
        this.book = data;
        console.log('Book data loaded:', this.book);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading book details:', error);
        this.errorMessage = 'Erreur lors du chargement des détails du livre. Veuillez réessayer.';
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getCoverUrl(coverId: number): string {
    if (!coverId) {
      return 'assets/no-cover.png';
    }
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
  }
}

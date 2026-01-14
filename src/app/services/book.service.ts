import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  /**
   * Get all books from computers subject
   * @returns Observable of any type containing the list of books
   */
  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/subjects/computers.json`);
  }

  /**
   * Get a book by its ID
   * @param id - The book identifier (e.g., OL17365W)
   * @returns Observable of any type containing the book details
   */
  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/works/${id}.json`);
  }

  /**
   * Search for books by title
   * @param title - The title of the book to search for
   * @returns Observable of any type containing search results
   */
  searchByTitle(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?title=${title}`);
  }

  /**
   * Search for books by publication year
   * @param year - The year of first publication
   * @returns Observable of any type containing search results
   */
  searchByYear(year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?first_publish_year=${year}`);
  }

  /**
   * Combined search by title and year
   * @param title - The title of the book
   * @param year - The year of first publication
   * @returns Observable of any type containing search results
   */
  searchByTitleAndYear(title: string, year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?title=${title}&first_publish_year=${year}`);
  }
}

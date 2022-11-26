import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Videogame } from '../models/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  basePath = 'http://localhost:3000/api/v1/videogames';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getAll():Observable<Videogame[]>{
    return this.http.get<Videogame[]>(this.basePath, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  getById(id:string):Observable<Videogame>{
    return this.http.get<Videogame>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }
  create(item: Videogame): Observable<Videogame>{
    return this.http.post<Videogame>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }
  update(id: number, item: Videogame): Observable<Videogame> {
    return this.http.put<Videogame>(`${this.basePath}/${id}`,JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

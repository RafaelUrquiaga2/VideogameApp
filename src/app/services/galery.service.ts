import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { VideogameOrdered } from '../models/videogame-ordered';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  basePath = 'http://localhost:3000/api/v1/videogamesOrdered';

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

  getAll():Observable<VideogameOrdered[]>{
    return this.http.get<VideogameOrdered[]>(this.basePath, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  getById(id:string):Observable<VideogameOrdered>{
    return this.http.get<VideogameOrdered>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  create(item: VideogameOrdered): Observable<VideogameOrdered>{
    return this.http.post<VideogameOrdered>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }
}

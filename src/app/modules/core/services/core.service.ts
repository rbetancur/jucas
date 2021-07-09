import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {


  constructor(private http: HttpClient) { }

  getFilms() : Observable<any[]> {
    const filmsPath = 'https://swapi.dev/api/films/';
    return this.http.get<any[]>(filmsPath)
      .pipe(
        retry(2),
      );
  }

  getStarships() : Observable<any>{
    const starshipsPath = 'https://swapi.dev/api/starships/';
    return this.http.get<any[]>(starshipsPath)
      .pipe(
        retry(2),
        catchError(this.manageError)
      );
  }

  getTodos() {
    const todosPath = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<any[]>(todosPath);
  }

  getDogs() {
    const dogsPath = 'https://dog.ceo/api/breeds/image/random';
    return this.http.get<any[]>(dogsPath)
      .pipe(
        retry(2),
        catchError(this.manageError)
      );
  }

  manageError(error:any) {
    let errorMessage = 'something was wrong';
    return throwError(errorMessage);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of, from } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Data } from './data';

// https://www.weatherinnovations.com/coop/weather.json

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // private data:Data[] = [];
  private data = new Subject<Data[]>();

  /** GET request from url for JSON weather data */
  // look at https://stackoverflow.com/questions/63888794/how-to-refresh-a-component-from-another-in-angular
  fetchData(url: string): Observable<Data[]> {
    return this.http.get<Data[]>(url).pipe(
      tap(res => this.data.next(res)),
      catchError((err, caught) => {
        this.data.next([]);
        return of([]);
      })
    );
  }

  getData(): Observable<Data[]>{
    return this.data.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}

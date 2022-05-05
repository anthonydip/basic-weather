import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Data } from './data';

// https://www.weatherinnovations.com/coop/weather.json

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private data:Data[] = [];

  /** GET request from url for JSON weather data */
  fetchData(url: string): Observable<Data[]> {
    return this.http.get<Data[]>(url).pipe(
      tap(res => this.data = res),
    );
  }

  getData(): Data[]{
    return this.data;
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

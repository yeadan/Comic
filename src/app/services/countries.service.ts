import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { country } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getcountries(): Observable<country[]> {
    return this.http.get<country[]>(
      'https://restcountries.com/v3.1/currency/euro'
    );
  }
  getCountryByName(id: string): Observable<country[]> {
    return this.http.get<country[]>(
      'https://restcountries.com/v3.1/name/' + id
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }

  public getAllCountries(): Observable<Country[]>{
      return this.httpClient.get<Country[]> ("https://restcountries.eu/rest/v2/all");
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

    public countries: Country[];
    public userInput: string;

  constructor(private countryService: CountryService) { }

   ngOnInit() {
    let observable: Observable<Country[]> = this.countryService.getAllCountries();
    observable.subscribe((countries) => { 
        this.countries = countries;
        console.log(countries) //print to f12
    });
  }

/*
    public filter(country):boolean {
        let str: string;
        return country.name.includes(str) || country.capital.includes(str);
    }

    public searchFunction() {
        document.getElementById("searchInput").innerHTML = this.countries.find(this.filter);
    }*/
}



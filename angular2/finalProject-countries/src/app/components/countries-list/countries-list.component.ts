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
    public userInput: string; //two ways binding

  constructor(private countryService: CountryService) { }

  //get countries list from observable
  ngOnInit() {
      let observable: Observable<Country[]> = this.countryService.getAllCountries();
      observable.subscribe((countriesList) => {
          this.countries=countriesList;
      });
  }

}

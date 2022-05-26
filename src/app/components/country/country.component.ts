import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class CountryComponent implements OnInit {
  country!: country;
  countries: country[] = [];
  spinner: boolean = false;
  panelOpenState = false;
  constructor(
    private countriesservice: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.spinner = true;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);
    this.countriesservice.getCountryByName(identifier!).subscribe({
      next: (result) => {
        this.country = result[0];
        console.log('Country --> ', this.country);
        this.spinner = false;
      },
      error: (error) => {
        console.error(error);
        this.spinner = false;
      },
    });
  }
}

import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class countriesComponent implements OnInit {
  spinner: boolean = true;
  countries: country[] = [];

  constructor(private countriesservice: CountriesService) {}

  ngOnInit(): void {
    this.spinner = true;
    this.countriesservice.getcountries().subscribe(
      (result) => {
        this.countries = result;
        this.spinner = false;
        console.log(this.countries);
      },
      (error) => {
        console.error(error);
        this.spinner = false;
      }
    );
  }
}

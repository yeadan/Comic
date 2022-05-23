import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { countriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  { path: '', component: countriesComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: '**', component: countriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { comicComponent } from './components/comics/comics.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  { path: '', component: comicComponent },
  { path: 'comic/:id', component: PersonComponent },
  { path: '**', component: comicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

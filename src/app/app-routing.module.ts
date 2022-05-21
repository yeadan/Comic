import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { comicComponent } from './components/comics/comics.component';
import { JokeComponent } from './components/joke/joke.component';

const routes: Routes = [
  { path: '', component: comicComponent },
  { path: 'comic/:id', component: JokeComponent },
  { path: '**', component: comicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

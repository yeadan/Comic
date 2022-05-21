import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Xkcd } from 'src/app/models/joke.interface';
import { ComicService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class JokeComponent implements OnInit {
  comic!: Xkcd;
  spinner: boolean = false;
  constructor(
    private comicService: ComicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.spinner = true;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);
    this.comicService.getcomics(parseInt(identifier!)).subscribe((comic) => {
      this.comic = comic;
      console.log('Joke --> ', this.comic);
      this.spinner = false;
    });
  }
}

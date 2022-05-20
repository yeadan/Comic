import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Xkcd } from 'src/app/models/person.interface';
import { ComicService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  comic!: Xkcd;
  constructor(
    private comicService: ComicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);
    this.comicService.getcomics(parseInt(identifier!)).subscribe((image) => {
      this.comic = image;
      console.log('Image --> ', this.comic);
    });
  }
}

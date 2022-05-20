import { Component, OnInit } from '@angular/core';
import { Xkcd } from 'src/app/models/person.interface';
import { comicService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class comicComponent implements OnInit {
  comic: Xkcd[] = [];
  xkcd: Xkcd = {
    num: 0,
    month: '',
    year: '',
    img: '',
    title: '',
  };

  constructor(private comicService: comicService) {}

  ngOnInit(): void {
    //Utilizaremos los numeros de 100 a 129
    for (var i = 100; i < 130; i++) {
      this.comicService.getcomics(i).subscribe((comic) => {
        this.xkcd = {
          num: comic.num,
          img: comic.img,
          month: comic.month,
          year: comic.year,
          title: comic.title,
        };
        this.comic.push(this.xkcd);
      });
    }
  }
}

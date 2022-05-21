import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private http: HttpClient) {}

  //Utilizaremos Observable<any> porque después construiremos el objeto
  getcomics(id: number): Observable<any> {
    return this.http.get<any>('https://xkcd.vercel.app/?comic=' + id);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private http: HttpClient) {}

  //Utilizaremos Observable<any> porque después construiremos el objeto
  getcomics(id: number): Observable<any> {
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
      );
    let a = 'https://xkcd.com/';
    //Utilizamos la ruta api generado en la conf. del proxy para CORS
    return this.http.request('GET', 'api/' + id + '/info.0.json', {
      headers: header,
    });
  }
}

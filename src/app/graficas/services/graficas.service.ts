import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  url = 'http://localhost:3000/grafica';

  constructor( private http: HttpClient) { }

  getUsuariosRedesSociales() {
    return this.http.get(`${this.url}`);
  }

  getUsuariosRedesSocialesDonaData(){
    return this.getUsuariosRedesSociales()
    .pipe(
      delay(1500),
      map( data => {

        const labels: string[] = Object.keys( data );
        const values = Object.values( data );
        return { labels, values }
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headLinesPage:number =0;
  categoria:string ="business";
  constructor(private http:HttpClient) { }

  getTopHeadLines(){

    this.headLinesPage++;

   return  this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=ar&page=${this.headLinesPage}&apiKey=b0f293b7b96f4e8383165a401bd47d3a`)

  }
  getTopHeadLinesCategorias(categoria:string){

    console.log(categoria);

    if (this.categoria != categoria){
      this.headLinesPage=0;
      this.categoria=categoria;
    }
    console.log(this.headLinesPage);

    this.headLinesPage++;
   return  this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=de&category=${categoria}&page=${this.headLinesPage}&apiKey=b0f293b7b96f4e8383165a401bd47d3a`)

  }

}

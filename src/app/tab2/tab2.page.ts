import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from '../interfaces/interfaces';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  noticias:Article[]=[];
  categorias = ['business','entertainment','general','health','science','sports','technology']
  categoria:string="";
  constructor(private noticiasServices:NoticiasService) {}
  ngOnInit(): void {

    this.segment.value = this.categorias[0];
    this.categoria=this.categorias[0];

    this.cargarNoticia(this.segment.value);

  }

  cambioCategoria(even){
    this.noticias = []

    this.categoria=even.detail.value;

    this.cargarNoticia(even.detail.value)
  }

  cargarNoticia(categoria:string,event?){



    this.noticiasServices.getTopHeadLinesCategorias(categoria).subscribe(resp=>{

      this.noticias.push(...resp.articles)

      if(resp.articles.length===0){
        event.target.disabled=true;
        event.target.complete();
      }

      if (event){
        event.target.complete();
      }


    })


  }

  loadData(event){

    this.cargarNoticia(this.categoria,event)

  }


}

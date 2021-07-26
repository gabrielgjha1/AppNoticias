import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias:Article[]=[];

  constructor(private storage: Storage) {
  }

 async guardarNoticia(noticia:Article){

    const existe = this.noticias.find(noti=> noti.title === noticia.title)

    if (!existe){
       await this.storage.create();
       this.noticias.unshift(noticia);
       this.storage.set('favorios',this.noticias)

    }

  }

  cargarFavoritos(){



  }


}

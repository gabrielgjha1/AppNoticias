import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [

    NoticiaComponent,
    NoticiasComponent

  ],
  exports: [

    NoticiasComponent,

  ],
  imports: [
    CommonModule, IonicModule,  IonicStorageModule.forRoot()
  ]
})
export class ComponentsModule { }

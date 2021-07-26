import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() item:Article;
  @Input() i:number;
  constructor(private datalocalService:DataLocalService
    ,private iab: InAppBrowser
    ,private actionSheetCtrl:ActionSheetController,
    private socialSharing: SocialSharing
    ) { }

  ngOnInit() {}

  abrirNoticia(){
    const browser = this.iab.create(this.item.url);


  }


async LanzarMenu(){

  const actionSheet = await this.actionSheetCtrl.create({
    buttons: [{
      text: 'Compartir',
      icon: 'share',
      cssClass:'action-dark',
      handler: () => {
        this.socialSharing.share(
          this.item.title,
          this.item.source.name,
          '',
          this.item.url,

        )
      }
    }, {
      text: 'Favorito',
      icon: 'star',
      cssClass:'action-dark',

      handler: () => {

        this.datalocalService.guardarNoticia(this.item)
      }
    }, {
      text: 'Cancelar',
      icon: 'close',
      role: 'cancel',
      cssClass:'action-dark',

      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();


}

}

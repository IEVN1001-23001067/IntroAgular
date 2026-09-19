import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:String='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }


  heroes: IHeroes[]=[
    {
    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Goku',
    description:'Kame Hame Ha',
    race:'Saiyan',
    ki:9000
  },

   {
    imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
    nombre:'Vegeta',
    description:'Principe Saiyan',
    race:'Saiyan',
    ki:8000
  },

   {
    imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
    nombre:'Piccolo',
    description:'Verde',
    race:'Namek',
    ki:6000
  },

   {
    imagen:'https://dragonball-api.com/characters/bulma.webp',
    nombre:'Bulma',
    description:'Mujer',
    race:'Humano',
    ki:0
  }
  ]
}

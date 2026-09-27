import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  num1 = ''; 
  num2 = ''; 
  num3 = ''; 
  num4 = ''; 
  resultado = 0;

  formula() {
    this.resultado = Math.sqrt((+this.num3 - +this.num1)**2 + (+this.num4 - +this.num2)**2);
  }
}
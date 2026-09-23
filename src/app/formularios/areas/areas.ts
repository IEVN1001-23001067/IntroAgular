/* import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-areas',
  standalone: false, 
  styleUrl: './areas.css',
  templateUrl: './areas.html',
})
export class Areas {
  lado: string = '';
  base: string = '';
  altura: string = '';
  radio: string = '';
  apo: string = '';
  resultado: number = 0;
  operacion: string = '';

  circulo(): void {
    this.resultado = parseFloat(this.radio) * 3.1416;
  }
  cuadrado(): void {
    this.resultado = parseFloat(this.lado) * parseFloat(this.lado);
  }
  pentagono(): void {
    this.resultado = ((parseFloat(this.lado) * 5) * parseFloat(this.apo)) / 2;
  }
  triangulo(): void {
    this.resultado = (parseFloat(this.base) * parseFloat(this.altura)) / 2;
  }

  calcular(): void {
    if (this.operacion === 'circulo') {
      this.circulo();
    } else if (this.operacion === 'cuadrado') {
      this.cuadrado();
    } else if (this.operacion === 'pentagono') {
      this.pentagono();
    } else if (this.operacion === 'triangulo') {
      this.triangulo();
    }
  }
} */
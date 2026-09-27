import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  /* nombre:string;
  cantidad:string;
  cineco:string;

  nombre="";
  cantidad="";

  nombreResultado:string;
  cantidadResultado:number;
  valorPagar:number;

  nombreResultado="";
  cantidadResultado=0;
  valorpagar:0;

  procesarComprar(){
    if (!this.nombre.trim()) {
      alert("Por favor ingrese el nombre.");
      return;
    }
    if (this.cantidad > 7) {
      alert("No se pueden comprar más de 7 boletas por persona.");
      return;
    }

    let precioUnitario = 12000;
    let subtotal = this.cantidad * precioUnitario;
    let descuentoCantidad = 0;

    if (this.cantidad > 5) {
      descuentoCantidad = 0.15; // 15%
    } else if (this.cantidad >= 3 && this.cantidad <= 5) {
      descuentoCantidad = 0.10; // 10%
    } else {
      descuentoCantidad = 0.0;  // Sin descuento (1 o 2 boletas)
    }

    let valorConDescuento = subtotal - (subtotal * descuentoCantidad);

  } */

}

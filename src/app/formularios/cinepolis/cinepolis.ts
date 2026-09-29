import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
 
  nombre: string = "";
  cantidadCompradores: number = 1;
  cineco: string = "no";
  cantidadBoletos: number = 1;

 
  valorPagar: number = 0;

  procesar() {
    
    if (this.cantidadCompradores < 1) {
      alert("Debe haber al menos 1 comprador.");
      return;
    }

    let limiteMaximoBoletos = this.cantidadCompradores * 7;

    if (this.cantidadBoletos > limiteMaximoBoletos) {
      alert(`No se pueden comprar más de 7 boletas por persona. El límite para ${this.cantidadCompradores} comprador(es) es de ${limiteMaximoBoletos} boletos.`);
      return;
    }

    let total = this.cantidadBoletos * 12;

    if (this.cantidadBoletos > 5) {
      total = total - (total * 0.15);
    } else if (this.cantidadBoletos >= 3) {
      total = total - (total * 0.10);
    }

    if (this.cineco === "si") {
      total = total - (total * 0.10);
    }

    this.valorPagar = total;
  }

  salir() {
   
    this.nombre = "";
    this.cantidadCompradores = 1;
    this.cineco = "no";
    this.cantidadBoletos = 1;
    this.valorPagar = 0;
  }
}
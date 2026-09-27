import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {

  frase: string = '';
  vocales: string = '';
  consonantes: string = '';
  esPalindromo: boolean = false;
  mostrar: boolean = false;

  analizar() {
    this.vocales = '';
    this.consonantes = '';
    let limpias: string[] = [];
    this.mostrar = true;

    for (let c of this.frase) {
      if (c !== ' ') {
        let min = c;
        if (c === 'A') min = 'a';
        if (c === 'E') min = 'e';
        if (c === 'I') min = 'i';
        if (c === 'O') min = 'o';
        if (c === 'U') min = 'u';

        if (
          min === 'a' || min === 'e' || min === 'i' || min === 'o' || min === 'u' ||
          min === 'á' || min === 'é' || min === 'í' || min === 'ó' || min === 'ú' ||
          min === 'A' || min === 'E' || min === 'I' || min === 'O' || min === 'U' ||
          min === 'Á' || min === 'É' || min === 'Í' || min === 'Ó' || min === 'Ú'
        ) {
          this.vocales += c + ' ';
        } else {
          this.consonantes += c + ' ';
        }
        limpias.push(min);
      }
    }

    this.esPalindromo = true;
    let i = 0;
    let f = limpias.length > 0 ? limpias.length - 1 : 0;

    while (i < f) {
      if (limpias[i] !== limpias[f]) {
        this.esPalindromo = false;
        break;
      }
      i++;
      f--;
    }
  }
}

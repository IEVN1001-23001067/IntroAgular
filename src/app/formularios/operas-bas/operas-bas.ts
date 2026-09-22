import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {

  num1:string=''
  num2:string=''
  resultado:number=0
  operacion: string = ''

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)}
   restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)}
    multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)}
    dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)}

    calcular(): void {
    if (this.operacion === 'sumar') {
      this.sumar();
    } else if (this.operacion === 'restar') {
      this.restar();
    } else if (this.operacion === 'multiplicar') {
      this.multiplicar();
    } else if (this.operacion === 'dividir') {
      this.dividir();
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component { 
  ngOnInit(){
this.imprimirTipos()
  }

  imprimirTipos(){
    let numero: number=1
    let palabras: string="Miercoles"
    let bool: boolean= true
    let simbolo: symbol=Symbol("Sbl")
    let numerogrande: bigint=8776543567n
    let indefinido: undefined=undefined
    let nada: null=null

    console.log(numero,typeof numero)
    console.log(palabras,typeof palabras)
    console.log(bool,typeof bool)
    console.log(simbolo,typeof simbolo)
    console.log(numerogrande,typeof numerogrande)
    console.log(indefinido,typeof indefinido)
    console.log(nada,typeof nada)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {

  mes:string="Febrero"
  verdadero:boolean=false
  contador:number=0

  sumar(){
    this.contador++
  }
}

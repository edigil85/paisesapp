import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent  {

  termino : string = '';
  hayError : boolean = false;
  listaPaises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor( private paisservice: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = false;
    this.paisservice.buscarPais(this.termino)
    .subscribe( (resp) => {
      this.listaPaises=resp;
    }, (err)=>{
      this.hayError=true;
      this.listaPaises=[];
    });
  }

  sugerencias( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisservice.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos=paises.splice(0,5),
    (err) => this.paisesSugeridos = []
    );

  }

  buscarSugerido(termino: string){
    this.buscar(termino);
    
  }
}



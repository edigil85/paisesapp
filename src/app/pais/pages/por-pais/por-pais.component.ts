import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino : string= '';
  hayError : boolean= false;
  listaPaises: Country[]=[];

  constructor( private paisservice: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisservice.buscarPais(this.termino)
    .subscribe( (resp) => {
      this.listaPaises=resp;
    }, (err)=>{
      this.hayError=true;
      this.listaPaises=[];
    });
  }

  sugerencias( termino: string){
    this.hayError=false;
  }
}



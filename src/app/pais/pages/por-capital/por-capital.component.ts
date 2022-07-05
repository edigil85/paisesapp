import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino : string= '';
  hayError : boolean= false;
  listaPaises: Country[]=[];

  constructor( private paisservice: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisservice.buscarCapital(this.termino)
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

import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  listaPaises: Country[]=[];

  constructor(private paisservice: PaisService) { }

  activarRegion(region: string){
    this.regionActiva= region;
    this.paisservice.buscarPorRegion(this.regionActiva)
    .subscribe( (resp) => {
      this.listaPaises=resp;
    }, (err)=>{
      this.listaPaises=[];
    });
  }
}

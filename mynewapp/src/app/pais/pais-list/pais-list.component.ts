import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent implements OnInit  {
  paisAntiguo : string = "";
  antiguo: number = 0;
  selectedPais!: Pais;
  selected = false;
  paises: Array<Pais> = [];

  constructor(private paisService: PaisService) {}

  getPaises() : void {
    this.paisService.getPaises().subscribe((paises) =>{
      this.paises = paises;
      this.getPaisAntiguo(this.paises); 

    });
  }

  ngOnInit(): void{
    this.getPaises();
  }

  onSelected(pais: Pais): void{
    this.selected = true;
    this.selectedPais = pais;
  }

  getPaisAntiguo(paises: Array<Pais>){
    let menor: number = 100000000;
    let paisAntiguo : string = "";
    for ( let  i = 0; i < paises.length; i++){
      if (menor > paises[i].formation_year){
        menor = paises[i].formation_year
        paisAntiguo = paises[i].name

      }
    }
    this.antiguo = menor;
    this.paisAntiguo = paisAntiguo; 
  }

}

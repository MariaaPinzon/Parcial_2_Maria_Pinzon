import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent implements OnInit  {

  selectedPais!: Pais;
  selected = false;
  paises: Array<Pais> = [];

  constructor(private paisService: PaisService) {}

  getPaises() : void {
    this.paisService.getPaises().subscribe((paises) =>{
      this.paises = paises;
    });
  }

  ngOnInit(): void{
    this.getPaises();
  }

  onSelected(pais: Pais): void{
    this.selected = true;
    this.selectedPais = pais;
  }

}

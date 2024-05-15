import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../pais.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrl: './pais-detail.component.css'
})
export class PaisDetailComponent implements OnInit {

  constructor(){}
  @Input() paisDetail!: Pais;

  ngOnInit() : void {
    
  }

}

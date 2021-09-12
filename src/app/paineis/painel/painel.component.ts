import { Tipodelixo } from './../model/tipodelixo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  tiposDeLixo?: Tipodelixo[];

  tiposSelecionados?: Tipodelixo[];

  constructor() { }

  ngOnInit() {
    this.tiposDeLixo = [
      {code: 1, name: "tipo1"},
      {code: 2, name: "tipo2"},
      {code: 3, name: "tipo3"},
      {code: 4, name: "tipo4"},
      {code: 5, name: "tipo5"},
    ]
  }

}

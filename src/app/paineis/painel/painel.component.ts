import { Tipodelixo } from './../model/tipodelixo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  form ?: any;

  tiposDeLixo: Tipodelixo[] = [];

  tiposSelecionados: Tipodelixo[] = [];

  constructor(private fb: FormBuilder) {
    this.montaForm();
  }

  ngOnInit() {
    this.tiposDeLixo = [
      {code: 1, name: "tipo1"},
      {code: 2, name: "tipo2"},
      {code: 3, name: "tipo3"},
      {code: 4, name: "tipo4"},
      {code: 5, name: "tipo5"},
    ]
  }

  montaForm(){
    this.form = this.fb.group({
      code: [''],
      name: [''],
      //situacao: ['ATIVO']
    })
  }



}

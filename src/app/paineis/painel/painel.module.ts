import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelModule} from 'primeng/panel';
import { PainelComponent } from './painel.component';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    CardModule,
    MultiSelectModule
  ],
  declarations: [PainelComponent],
  exports: [PainelComponent]
})
export class PainelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelModule} from 'primeng/panel';
import { PainelComponent } from './painel.component';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    CardModule,
    MultiSelectModule,
    ReactiveFormsModule
  ],
  declarations: [PainelComponent],
  exports: [PainelComponent]
})
export class PainelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessoesRoutingModule } from './sessoes-routing.module';
import { SessoesComponent } from './sessoes.component';


@NgModule({
  declarations: [
    SessoesComponent
  ],
  imports: [
    CommonModule,
    SessoesRoutingModule
  ]
})
export class SessoesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastrarDadosComponent } from './cadastrar-dados';
import { DadosService } from './dados.service';




@NgModule({
  declarations: [
    CadastrarDadosComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    CadastrarDadosComponent
  ],

  providers: [
    DadosService
  ]

})
export class DadosModule { }

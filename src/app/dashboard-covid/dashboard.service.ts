import { Injectable } from '@angular/core';
import { DadosCovid, DadosService } from '../dados';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)

export class DashboardService {

  dadosCadastrados : DadosCovid[];

  constructor(servicoDados: DadosService) { 
    this.dadosCadastrados = servicoDados.getDadosCadastrados();
  }

  obterDadosCasos() { 
    let arrayCasos = [];  
    this.dadosCadastrados.forEach(dado => {
      arrayCasos.push([dado.mes, dado.casosConfirmados]);      
    })
    return arrayCasos;
  }

  obterDadosObitos() { 
    let arrayObitos = [];  
    this.dadosCadastrados.forEach(dado => {
      arrayObitos.push([dado.mes, dado.obitos]);      
    })
    return arrayObitos;
  }
}



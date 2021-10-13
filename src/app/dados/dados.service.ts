import { Injectable } from '@angular/core';
import { DadosCovid } from './dados.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  meses : string[] = ['Junho', 'Julho', 'Agosto', 'Setembro']

  getMeses() {
    return this.meses;
  }

  getDadosCadastrados() {
    const dadosCadastrados = localStorage['dadosCadastrados'];
    return dadosCadastrados ? JSON.parse(dadosCadastrados) : []; 
  }

  cadastrarDadosCovid (dadosCovid:DadosCovid) {
    const dadosCadastrados = this.getDadosCadastrados();
    dadosCadastrados.push(dadosCovid);
    localStorage['dadosCadastrados'] = JSON.stringify(dadosCadastrados);
  }

  constructor() { 
    
  }
}

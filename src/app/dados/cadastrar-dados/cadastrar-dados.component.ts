import { Component, OnInit } from '@angular/core';
import { DadosCovid } from '../dados.model';
import { DadosService } from '../dados.service';

@Component({
  selector: 'cadastrar-dados',
  templateUrl: './cadastrar-dados.component.html',
  styleUrls: ['./cadastrar-dados.component.css']
})
export class CadastrarDadosComponent implements OnInit {

  camposObrigatorios: string = 'Os campos marcados com * são de preenchimento obrigatório';

  meses : string[];

  dadosCovid : DadosCovid;

  dadosCadastrados : DadosCovid[];

  constructor(private servicoDados:DadosService) {
    this.meses = servicoDados.getMeses();
    this.dadosCadastrados = servicoDados.getDadosCadastrados();
  }

  ngOnInit(): void {
    this.dadosCovid = new DadosCovid();
  }

  cadastrarDadosCovid() {
    this.servicoDados.cadastrarDadosCovid(this.dadosCovid);
    console.log(this.dadosCovid)
  }

}

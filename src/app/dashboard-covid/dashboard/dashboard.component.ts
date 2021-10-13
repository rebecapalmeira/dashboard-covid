import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/dados';
import { DashboardService } from '../dashboard.service';

declare var google : any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tiposGraficos : string[] = ['Pizza', 'Barras', 'Linhas', 'Colunas']

  private dadosCasos : any;
  private dadosObitos : any;

  constructor(private servicoDados: DadosService, private servicoDashboard: DashboardService) { }

  ngOnInit(): void {
    this.dadosCasos = this.servicoDashboard.obterDadosCasos();
    this.dadosObitos = this.servicoDashboard.obterDadosObitos();
    this.init()
  }

  init(): void {
    if (typeof (google) !== 'undefined') {
      google.charts.load('current', { 'packages': ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos():void {
    this.exibirPieChartCasos();
    this.exibirPieChartObitos();

    this.exibirBarChartCasos();
    this.exibirBarChartObitos();

    this.exibirLineChartCasos();
    this.exibirLineChartObitos();

    this.exibirColumnChartCasos();
    this.exibirColumnChartObitos();
  }

  // função pra exibir gráfico no formato pizza
  exibirPieChartCasos():void {
    const elementoHtml = document.getElementById('pie_chart_casos');
    const pie_chart = new google.visualization.PieChart(elementoHtml);

    pie_chart.draw(this.obterDadosCasos(), this.obterOpcoes());
  }

  exibirPieChartObitos():void {
    const elementoHtml = document.getElementById('pie_chart_obitos');
    const pie_chart = new google.visualization.PieChart(elementoHtml);

    pie_chart.draw(this.obterDadosObitos(), this.obterOpcoes());
  }

  // função para exibir gráfico em barras
  exibirBarChartCasos():void {
    const elementoHtml = document.getElementById('bar_chart_casos');
    const bar_chart = new google.visualization.BarChart(elementoHtml);

    bar_chart.draw(this.obterDadosCasos(), this.obterOpcoes());
  }

  exibirBarChartObitos():void {
    const elementoHtml = document.getElementById('bar_chart_obitos');
    const bar_chart = new google.visualization.BarChart(elementoHtml);

    bar_chart.draw(this.obterDadosObitos(), this.obterOpcoes());
  }

  // função para exibir gráfico em linhas
  exibirLineChartCasos():void {
    const elementoHtml = document.getElementById('line_chart_casos');
    const line_chart = new google.visualization.LineChart(elementoHtml);

    line_chart.draw(this.obterDadosCasos(), this.obterOpcoes());
  }

  exibirLineChartObitos():void {
    const elementoHtml = document.getElementById('line_chart_obitos');
    const line_chart = new google.visualization.LineChart(elementoHtml);

    line_chart.draw(this.obterDadosObitos(), this.obterOpcoes());
  }

  // função para exibir gráfico em colunas
  exibirColumnChartCasos():void {
    const elementoHtml = document.getElementById('column_chart_casos');
    const column_chart = new google.visualization.ColumnChart(elementoHtml);

    column_chart.draw(this.obterDadosCasos(), this.obterOpcoes());
  }

  exibirColumnChartObitos():void {
    const elementoHtml = document.getElementById('column_chart_obitos');
    const column_chart = new google.visualization.ColumnChart(elementoHtml);

    column_chart.draw(this.obterDadosObitos(), this.obterOpcoes());
  }


  //função para obter dados de casos confirmados para gerar os gráficos 
  obterDadosCasos():any {
    const dataCasos = new google.visualization.DataTable();

    dataCasos.addColumn('string', 'Mês');
    dataCasos.addColumn('number', 'Casos Confirmados');
    
    dataCasos.addRows(this.dadosCasos);
    return dataCasos;
  }

  //função para obter dados de obitos para gerar os gráficos
  obterDadosObitos():any {
    const dataObitos = new google.visualization.DataTable();

    dataObitos.addColumn('string', 'Mês');
    dataObitos.addColumn('number', 'Óbitos');
    
    dataObitos.addRows(this.dadosObitos);
    return dataObitos;
  }

  obterOpcoes():any {
    return {
      'width': 'auto',
      'height': 300
    };
  }

}

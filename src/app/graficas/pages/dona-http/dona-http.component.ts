import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut https://www.chartjs.org/docs/latest/general/colors.html
  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        // data: [ 350, 450, 100, 150 ],
        data: [],
        backgroundColor: [
          '#248CF2',
          '#26CBFC',
          '#2DE6E1',
          '#51FCC6',
          '#4EF290',
        ],
        hoverBackgroundColor: [
          '#4EA1F2',
          '#51D5FC',
          '#55E6E2',
          '#76FFDC',
          '#62F59E',
        ],
        borderColor: [
          '#248CF2',
          '#26CBFC',
          '#2DE6E1',
          '#51FCC6',
          '#76FFDC',
          '#4EF290',
        ],
        hoverBorderColor: ['#248CF2', '#26CBFC', '#2DE6E1', '#62F59E'],
        hoverOffset: 15,
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);

    //     const labels: string[] = Object.keys( data );
    //     const values = Object.values( data );

    //     this.doughnutChartData.datasets[0].data = values;
    //     // this.doughnutChartLabels = labels
    //     labels.forEach( label => {
    //       this.doughnutChartLabels.push(label)
    //     })

    //   });

    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        labels.forEach((label) => {
          this.doughnutChartLabels.push(label);
        });
        this.doughnutChartData.datasets[0].data = values;
      });
  }
}

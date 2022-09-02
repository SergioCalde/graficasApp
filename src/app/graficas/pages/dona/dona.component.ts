import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  // Doughnut https://www.chartjs.org/docs/latest/general/colors.html
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 150 ],
        backgroundColor: ['#248CF2','#26CBFC','#2DE6E1', '#4EF290'],
        hoverBackgroundColor: ['#4EA1F2','#51D5FC','#55E6E2', '#62F59E'],
        borderColor: ['#248CF2','#26CBFC','#2DE6E1','#4EF290'],
        hoverBorderColor: ['#248CF2','#26CBFC','#2DE6E1','#62F59E'],
        hoverOffset: 15        
      },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

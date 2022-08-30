import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent implements OnInit {

  public proveedoresData: ChartData<'bar'> = {
    labels: [ '2021', '2022','2023','2024','2025' ],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
    
  };

  public productoData: ChartData<'bar'> = {
    labels: [ '2021', '2022','2023','2024','2025' ],
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

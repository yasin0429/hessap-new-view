import { Component, OnInit} from '@angular/core';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-dashboard2',
    templateUrl: './dashboard2.component.html',
    styleUrls: ['./dashboard2.component.scss']
})

export class Dashboard2Component implements OnInit  {
  ngOnInit(): void {
    console.log('dashboard2 run');
  }

    // Line chart configuration Starts
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false
      
    };
    public barChartLabels = ['Grup1', 'Grup2', 'Grup3', 'Grup4', 'Grup5', 'Grup6', 'Grup7', 'Grup8', 'Grup9', 'Grup10'];
    public barChartType = 'bar';
    public barChartLegend = true;
      
    public barChartData: any[] = [
        { data: [100,20,80,10,20,50,90,88,100,11,0], label: 'Alacak' },
        { data: [50,20,100,50,60,40,55,22,118,33,0], label: 'Verecek' }
      ];
      
    public barChartColors: Array<any> = [
        {
      
          backgroundColor: '#843cf7',
          borderColor: '#843cf7',
          pointBackgroundColor: '#843cf7',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#843cf7'
        },
        {
      
          backgroundColor: '#38b8f2',
          borderColor: '#38b8f2',
          pointBackgroundColor: '#38b8f2',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#38b8f2'
        },
      
      ];
    public chartClicked(e: any): void {
        //your code here
      }
    
      public chartHovered(e: any): void {
        //your code here
      }
    // Line chart configuration Ends
}
import {Component, Injectable, Input} from '@angular/core';

@Component({
  selector: 'app-feed-statistics-chart',
  templateUrl: './feed-statistics-chart.component.html',
  styleUrls: ['./feed-statistics-chart.component.css']
})

export class FeedStatisticsChartComponent {
  @Input() feedData;

  public chartLabels: string[] = ['All chars', 'Lat chars', 'Other chars'];
  public chartData: number[] = [100, 0, 0];
  public chartType = 'pie';
  public chartOptions = {
    responsive: true
  };

  constructor() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}

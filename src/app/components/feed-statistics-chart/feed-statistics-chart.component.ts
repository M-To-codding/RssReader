import {Component, Injectable, Input} from '@angular/core';

@Component({
  selector: 'app-feed-statistics-chart',
  templateUrl: './feed-statistics-chart.component.html',
  styleUrls: ['./feed-statistics-chart.component.css']
})

export class FeedStatisticsChartComponent {
  @Input() feedData;

  public chartLabels: string[] = ['All chars', 'Lat chars', 'Other chars'];
  public chartType = 'pie';
  public chartOptions = {
    responsive: true
  };

  constructor() {
  }

}

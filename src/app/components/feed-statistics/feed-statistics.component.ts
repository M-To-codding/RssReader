import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed-statistics',
  templateUrl: './feed-statistics.component.html',
  styleUrls: ['./feed-statistics.component.css']
})
export class FeedStatisticsComponent implements OnInit {
  @Input() feedData;

  constructor() {
  }

  ngOnInit() {
  }


}

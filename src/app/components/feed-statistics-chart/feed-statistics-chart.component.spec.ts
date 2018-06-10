import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedStatisticsChartComponent } from './feed-statistics-chart.component';

describe('FeedStatisticsChartComponent', () => {
  let component: FeedStatisticsChartComponent;
  let fixture: ComponentFixture<FeedStatisticsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedStatisticsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

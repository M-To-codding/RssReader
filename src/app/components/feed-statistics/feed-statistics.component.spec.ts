import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedStatisticsComponent } from './feed-statistics.component';

describe('FeedStatisticsComponent', () => {
  let component: FeedStatisticsComponent;
  let fixture: ComponentFixture<FeedStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

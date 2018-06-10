import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule, MDBBootstrapModule} from 'angular-bootstrap-md';


import {AppComponent} from './app.component';
import {FeedComponent} from './components/feed/feed.component';
import {FeedServiceService} from "./services/feed-service/feed-service.service";
import {HttpClientModule} from "@angular/common/http";
import {HoverEffectDirective} from './directives/hover-effect.directive';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { FeedStatisticsComponent } from './components/feed-statistics/feed-statistics.component';
import { FeedStatisticsChartComponent } from './components/feed-statistics-chart/feed-statistics-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HoverEffectDirective,
    FeedItemComponent,
    FeedStatisticsComponent,
    FeedStatisticsChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule
  ],
  providers: [FeedServiceService, FeedStatisticsChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

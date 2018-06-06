import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FeedComponent} from './components/feed/feed.component';
import {FeedServiceService} from "./services/feed-service/feed-service.service";
import {HttpClientModule} from "@angular/common/http";
import {HoverEffectDirective} from './directives/hover-effect.directive';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { FeedStatisticsComponent } from './components/feed-statistics/feed-statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HoverEffectDirective,
    FeedItemComponent,
    FeedStatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FeedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

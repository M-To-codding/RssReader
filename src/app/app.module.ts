import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FeedComponent} from './feed/feed.component';
import {FeedServiceService} from "./services/feed-service/feed-service.service";
import {HttpClientModule} from "@angular/common/http";
import {HoverEffectDirective} from './directives/hover-effect.directive';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HoverEffectDirective
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

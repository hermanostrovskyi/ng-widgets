import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { FollowerWidgetComponent } from './follower-widget/follower-widget.component';
import { PoiWidgetComponent } from './poi-widget/poi-widget.component';
import { UniquePipe } from './common/pipes/unique.pipe';
import { PhonePipe } from './common/pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    FollowerWidgetComponent,
    PoiWidgetComponent,
    UniquePipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

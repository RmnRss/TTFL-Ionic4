import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DatePipe} from '@angular/common';
import {ScrollVanishDirective} from './directives/scroll-vanish.directive';
import {HttpClientModule} from '@angular/common/http';
import {ScrollVanishModule} from './directives/scroll-vanish.module';

@NgModule({
  declarations: [AppComponent, ScrollVanishDirective],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ScrollVanishModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

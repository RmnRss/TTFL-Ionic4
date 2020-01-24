import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HttpBackend, HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {DatePipe, registerLocaleData} from '@angular/common';
import {ScrollVanishModule} from './directives/scroll-vanish.module';
import localeFr from '@angular/common/locales/fr';

import {NativeHttpBackend, NativeHttpFallback, NativeHttpModule} from 'ionic-native-http-connection-backend';

registerLocaleData(localeFr);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        NativeHttpModule,
        ScrollVanishModule],
    providers: [
        StatusBar,
        SplashScreen,
        DatePipe,
        {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

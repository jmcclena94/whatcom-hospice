import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { StaffPage } from '../pages/staff/staff';
import { TAHPage } from '../pages/talk-about-hospice/talk-about-hospice';
import { TAIPage } from '../pages/talk-about-illness/talk-about-illness';
import { AMIPage } from '../pages/advanced-medical-interventions/advanced-medical-interventions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    StaffPage,
    TAHPage,
    TAIPage,
    AMIPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    StaffPage,
    TAHPage,
    TAIPage,
    AMIPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber
  ]
})
export class AppModule {}

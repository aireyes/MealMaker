import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { Picked } from '../providers/picked';
import { ThirdPage } from '../pages/third/third';
import { FourthPage } from '../pages/fourth/fourth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    ThirdPage,
    FourthPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    ThirdPage,
    FourthPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Picked]
})
export class AppModule {}

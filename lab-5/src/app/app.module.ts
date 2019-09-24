import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import  {Geolocation} from "@ionic-native/geolocation/ngx";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";

const firebaseConfig = {
  apiKey: "AIzaSyA8qht68QhIUbHQ9oObpakI1kLrL4rDpfU",
  authDomain: "ase-lab-abd0a.firebaseapp.com",
  databaseURL: "https://ase-lab-abd0a.firebaseio.com",
  projectId: "ase-lab-abd0a",
  storageBucket: "ase-lab-abd0a.appspot.com",
  messagingSenderId: "686461058298",
  appId: "1:686461058298:web:5120bf7d69e54b2a3b9d43"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    AngularFireAuth,
    Geolocation
  ]
})
export class AppModule {}

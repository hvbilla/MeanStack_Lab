import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public showGeoOutcome : Observable<any[]>;
  public getGeoLocations : any;

  constructor(public AngularFireBaseDB: AngularFireDatabase, public FireAuthAng: AngularFireAuth) {
    this.showGeoOutcome = AngularFireBaseDB.list(this.FireAuthAng.auth.currentUser.uid).valueChanges();
    this.showGeoOutcome.subscribe((geoLocsList: any) =>{
      this.getGeoLocations=geoLocsList;
    });
  }

  LocationSubmit() {
    const currentLoggedInUser = this.AngularFireBaseDB.list(this.FireAuthAng.auth.currentUser.uid);
    console.log(currentLoggedInUser);
    navigator.geolocation.getCurrentPosition(geoLocSuccessCall, geoLocationErrorCall, {enableHighAccuracy: true});

    function geoLocSuccessCall(location){
      let ts = new Date();
      currentLoggedInUser.push({
        'LocationTiming' : ts.getTime(),
        'LocationLatitude' : location.coords.latitude,
        'LocationLongitude' : location.coords.longitude});
    }
    function geoLocationErrorCall(error) {
      alert('error ID: ' + error.code + '\n' +
        'errorMsg: ' + error.message + '\n');
    }
  }
}

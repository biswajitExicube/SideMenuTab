import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public users = [];
  public page = 0;
  public maximumPages = 3;
  public dob : any;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public menuCtrl: MenuController) {

  }
  openMenu(side){
    this.menuCtrl.toggle('right');    
  }


}

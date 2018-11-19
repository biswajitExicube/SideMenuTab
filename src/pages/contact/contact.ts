import { Component } from '@angular/core';
import { NavController, MenuController,  } from 'ionic-angular';

import * as $ from 'jquery'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {


  }

  openMenu(side){
    this.menuCtrl.toggle('right');    
  }

}

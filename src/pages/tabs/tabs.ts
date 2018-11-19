import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Tab } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


@IonicPage()

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  public myIndex: number;
  public tabIndex: number  = 0;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public app:App, 
    public zone:NgZone,
    private nativePageTransitions: NativePageTransitions
  ) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;
    this.tabIndex = index;
      switch (true){
        case (currentIndex < index):
          return('left');
        case (currentIndex > index):
          return('right');
      }      
    }

    public transition(e: any):void {    
      let options: NativeTransitionOptions = {
        direction: this.getAnimationDirection(e.index),
        duration: 250,
        slowdownfactor: -1,
        slidePixels: 0,
        iosdelay: 20,
        androiddelay: 0,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 48
      };  
      this.nativePageTransitions.slide(options);    
    }
}

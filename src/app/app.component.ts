import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;


  public rootPage:any = TabsPage;
  pages: Array<{
    title: string;
    component: any;
    tabComponent?: any;
    index?: number;
    icon: string;
  }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: TabsPage, tabComponent: 'HomePage', index: 0, icon: 'home' },
      { title: 'About', component: TabsPage, tabComponent: 'AboutPage', index: 1, icon: 'pin' },
      { title: 'Contact', component: TabsPage, tabComponent: 'ContactPage', index: 2, icon: 'list' }
    ]
    
  }

  openPage(page) {
    let params = {};
    if(page.index) {
      params = { tabIndex: page.index }; 
    }if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    }else{
      this.nav.setRoot(page.component, params);
    }
  }
  
}

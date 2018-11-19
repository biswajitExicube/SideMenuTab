import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public page = 0;
  public maximumPages = 6;

  public innerPages: Array<{
    title: string;
    desc : string;
    link : string;
    component: any;
    background?: any;
    index?: number;
  }>

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

    this.loadUsers();

    this.innerPages = [
      { title: 'Card 1', desc: 'Lorem Ipsum', link: 'Link 1', component: AboutPage, background: '../assets/imgs/homeImage1.jpg', index: 0 },
      { title: 'Card 2', desc: 'Lorem Ipsum', link: 'Link 2', component: AboutPage, background: '../assets/imgs/homeImage2.jpg', index: 1 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
      { title: 'Card 3', desc: 'Lorem Ipsum', link: 'Link 3', component: AboutPage, background: '../assets/imgs/homeImage3.jpg', index: 2 },
    ]
  }


  loadUsers(infiniteScroll?) {
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    
  }
 
  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
  }

  openMenu(side){
    this.menuCtrl.toggle('right');    
  }

  openInnerPage(page) {
    let params = {};
    if(page.index) {
      params = { tabIndex: page.index }; 
    }if(this.navCtrl.getActiveChildNav() && page.index != undefined) {
      this.navCtrl.getActiveChildNav().select(page.index);
    }else{
      this.navCtrl.setRoot(page.component, params);
    }
  }


}

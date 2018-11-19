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

    this.loadUsers();
  }
  openMenu(side){
    this.menuCtrl.toggle('right');    
  }

  loadUsers(infiniteScroll?) {
    this.httpClient.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
    .subscribe(res => {
      this.users = this.users.concat(res['results']);
      console.log(this.users);
      for(let i = 0; i<this.users.length; i++){
        this.dob = this.users[i].dob.date;
      }
      console.log(this.dob);
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    })
  }
 
  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
  }

}

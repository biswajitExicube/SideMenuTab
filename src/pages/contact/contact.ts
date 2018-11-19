import { Component } from '@angular/core';
import { NavController, MenuController,  } from 'ionic-angular';

import * as $ from 'jquery'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

    // extend button functionality
  //   $('#fs').bind('click', function() {
  //     // display the video
  //     $("#myVideo").css({'visibility' : 'visible', 'display' : 'block'});

  //     // launch the video fullscreen
  //     var vid = document.getElementById("myVideo");
  //     vid.webkitEnterFullscreen();
  // });

  }

  openMenu(side){
    this.menuCtrl.toggle('right');    
  }

  launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.webkitEnterFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.webkitEnterFullscreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitEnterFullscreen();
    } else if(element.msRequestFullscreen) {
      element.webkitEnterFullscreen();
    }
  }
}

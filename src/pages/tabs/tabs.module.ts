import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HomePageModule } from '../home/home.module';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    HomePageModule,
    ContactPageModule,
    AboutPageModule
  ],
})
export class TabsPageModule {}

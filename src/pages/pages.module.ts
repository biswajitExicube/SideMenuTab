import { NgModule} from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsPageModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    //LoginPage,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageModule
  ],
})
export class CommonPageModule {}

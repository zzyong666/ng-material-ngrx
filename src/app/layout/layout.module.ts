import { DashbordModule } from './../pages/dashbord/dashbord.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';

@NgModule({
  declarations: [AppHomeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashbordModule
  ]
})
export class LayoutModule { }

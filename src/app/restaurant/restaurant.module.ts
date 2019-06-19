import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class RestaurantModule { }

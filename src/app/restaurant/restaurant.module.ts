import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@NgModule({
  declarations: [LoginpageComponent, RestaurantComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class RestaurantModule { }

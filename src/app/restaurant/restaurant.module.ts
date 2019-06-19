import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TabledefinitionComponent } from './tabledefinition/tabledefinition.component';
import { PaidoutsmiscolComponent } from './paidoutsmiscol/paidoutsmiscol.component';

@NgModule({
  declarations: [LoginpageComponent, TabledefinitionComponent, PaidoutsmiscolComponent],

  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class RestaurantModule { }

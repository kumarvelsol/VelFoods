import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ManagerComponent } from './manager/manager.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemNamesComponent } from './item-names/item-names.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MaterialModule } from './shared/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    RestaurantsComponent,
    ItemCategoryComponent,
    ItemNamesComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,RestaurantModule,
    CoreModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
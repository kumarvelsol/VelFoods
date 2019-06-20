import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ManagerComponent } from './manager/manager.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemNamesComponent } from './item-names/item-names.component';
import { RestaurantModule } from './restaurant/restaurant.module';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    RestaurantsComponent,
    ItemCategoryComponent,
    ItemNamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,FormsModule,MatFormFieldModule,MatInputModule,FormsModule,MatIconModule,MatCardModule,MatTableModule,
    BrowserAnimationsModule,CommonModule,MatSelectModule,MatDatepickerModule,MatRadioModule,
    CoreModule,

    
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    
    CoreModule,
    RestaurantModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

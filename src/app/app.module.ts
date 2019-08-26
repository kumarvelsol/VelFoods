import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { MatDialogModule,MatSidenavModule } from '@angular/material';
import { MaterialModule } from './shared/material.module';
import { LoginComponent } from './login/login.component';
import { OrderingComponent } from './ordering/ordering.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { HttpClientModule } from '@angular/common/http';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { OffersDialogComponent } from './restaurant/offers-dialog/offers-dialog.component';
import { EmployeedepartmentComponent } from './employeedepartment/employeedepartment.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { BillsettledailogComponent } from './restaurant/Billsettle/billsettledailog/billsettledailog.component';
import { SidenavToolbarComponent } from './ui/sidenav-toolbar/sidenav-toolbar.component';
import { TakeawaydialogComponent } from './restaurant/takeaway/takeawaydialog/takeawaydialog.component';

@NgModule({
  declarations: [ 
    AppComponent,
    ManagerComponent,
    RestaurantsComponent,
    ItemCategoryComponent,
    ItemNamesComponent,
    LoginComponent,
    OrderingComponent,
    DialogBoxComponent,
    EmployeedepartmentComponent,OffersDialogComponent,
    EmployeeregistrationComponent,
    SidenavToolbarComponent,
  ],
  imports: [
    MaterialModule,MatDialogModule,
    BrowserModule,AppRoutingModule,
    ReactiveFormsModule,FormsModule,MatSidenavModule,
    BrowserAnimationsModule,RestaurantModule,
    CoreModule,AmazingTimePickerModule,
    CommonModule,HttpClientModule,
  ],
  entryComponents: [
    DialogBoxComponent,OffersDialogComponent,
    BillsettledailogComponent,TakeawaydialogComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
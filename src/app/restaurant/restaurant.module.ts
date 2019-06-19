import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatDialogModule,MatButtonModule, MatSelectModule,MatSidenavModule, MatIconModule, MatTabsModule,MatListModule,MatTableModule,MatInputModule } from '@angular/material';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TabledefinitionComponent } from './tabledefinition/tabledefinition.component';
import { PaidoutsmiscolComponent } from './paidoutsmiscol/paidoutsmiscol.component';
import { PropertyComponent } from './property/property.component';
import { TaxpageComponent } from './taxpage/taxpage.component';

@NgModule({
  declarations: [LoginpageComponent, PropertyComponent, TaxpageComponent,TabledefinitionComponent, PaidoutsmiscolComponent],



  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule, MatSidenavModule,
    MatListModule, MatTableModule,
    MaterialModule, FormsModule,
    MatInputModule, ReactiveFormsModule,
    MatIconModule, MatDialogModule,
    MatSelectModule, MatTabsModule,
  ]
})
export class RestaurantModule { }

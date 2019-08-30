import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemNamesComponent } from './item-names/item-names.component';
import { LoginComponent } from './login/login.component';
import { OrderingComponent } from './ordering/ordering.component';
import { TableStatusComponent } from './restaurant/table-status/table-status.component';
import { EmployeedepartmentComponent } from './employeedepartment/employeedepartment.component';
import { EmployeeregistrationComponent} from './employeeregistration/employeeregistration.component'
import { SidenavToolbarComponent } from './ui/sidenav-toolbar/sidenav-toolbar.component';
import { PropertyComponent } from './restaurant/property/property.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OffersComponent } from './restaurant/offers/offers.component';
import { TaxpageComponent } from './restaurant/taxpage/taxpage.component';
import { ManagerComponent } from './manager/manager.component';
import { TabledefinitionComponent } from './restaurant/tabledefinition/tabledefinition.component';
import { PaidoutTabComponentComponent } from './restaurant/paidout-tab-component/paidout-tab-component.component';
import { BankwallettabbarComponent } from './restaurant/BanksWallets/bankwallettabbar/bankwallettabbar.component';
import { TablereserveComponent } from './restaurant/tablereserve/tablereserve.component';
import { SettledbillsComponent } from './restaurant/Billsettle/settledbills/settledbills.component';
import { BillpaymentComponent } from './restaurant/billpayment/billpayment.component';
import { TabletransferComponent } from './restaurant/tabletransfer/tabletransfer.component';
import { TakeawayComponent } from './restaurant/takeaway/takeaway.component';
import { PettyCashComponent } from './restaurant/petty-cash/petty-cash.component';
const routes: Routes = [
  //{path:'',pathMatch:'full',redirectTo:'restaurant'},
  //{path:'restaurant',loadChildren:'./restaurant/restaurant.module#RestaurantModule'},
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  { path:'Home',
    component:SidenavToolbarComponent,
    children : [
      {path:'',redirectTo: 'ordering', pathMatch: 'full'},
      {path:'ordering',component:OrderingComponent},
      {path:'itemCategory',component:ItemCategoryComponent},
      {path:'itemNames',component:ItemNamesComponent},
      {path:'property',component:PropertyComponent},
      {path:'tax',component:TaxpageComponent},
      {path:'restaurants',component:RestaurantsComponent},
      {path:'managers',component:ManagerComponent},
      {path:'offers',component:OffersComponent},
      {path:'employeedepartment',component:EmployeedepartmentComponent},
      {path:'employeeregistration',component:EmployeeregistrationComponent},
      {path:'tabledefinition',component:TabledefinitionComponent},
      {path:'Paidouts',component:PaidoutTabComponentComponent},
      {path:'bankswallets',component:BankwallettabbarComponent},
      {path:'pettycash',component:PettyCashComponent},

      {path:'tablestatus',component:TableStatusComponent},
      {path:'tablebooking',component:TablereserveComponent},
      {path:'settledbills',component:SettledbillsComponent},
      {path:'BillPayment',component:BillpaymentComponent},
      {path:'tabletransfer',component:TabletransferComponent},
      {path:'takeaway',component:TakeawayComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
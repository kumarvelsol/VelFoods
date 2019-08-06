import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TabledefinitionComponent } from './tabledefinition/tabledefinition.component';
import { PaidoutsmiscolComponent } from './paidoutsmiscol/paidoutsmiscol.component';
import { PropertyComponent } from './property/property.component';
import { TaxpageComponent } from './taxpage/taxpage.component';
import { BankwallettabbarComponent } from './BanksWallets/bankwallettabbar/bankwallettabbar.component';
import { RestaurantsComponent} from '../restaurants/restaurants.component';
import { ManagerComponent } from '../manager/manager.component';
import { OffersComponent } from './offers/offers.component';
import { TablereserveComponent } from './tablereserve/tablereserve.component';
import { SettledbillsComponent } from './Billsettle/settledbills/settledbills.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { PaidoutTabComponentComponent } from './paidout-tab-component/paidout-tab-component.component';
const routes: Routes = [
  {path:'',pathMatch:'full',component:LoginpageComponent},
  {path:'property',component:PropertyComponent},
  {path:'tax',component:TaxpageComponent},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'managers',component:ManagerComponent},
  {path:'offers',component:OffersComponent},
  {path:'tabledefinition',component:TabledefinitionComponent,pathMatch: 'full'},
  {path:'Paidouts',component:PaidoutTabComponentComponent},
  {path:'bankswallets',component:BankwallettabbarComponent},
  {path:'tablebooking',component:TablereserveComponent},
  // {path:'SettledBills',component:SettledbillsComponent},
  {path:'BillPayment',component:BillpaymentComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
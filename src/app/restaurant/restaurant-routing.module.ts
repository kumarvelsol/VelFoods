import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TabledefinitionComponent } from './tabledefinition/tabledefinition.component';
import { PaidoutsmiscolComponent } from './paidoutsmiscol/paidoutsmiscol.component';
import { PropertyComponent } from './property/property.component';
import { TaxpageComponent } from './taxpage/taxpage.component';
import { BankwallettabbarComponent } from './BanksWallets/bankwallettabbar/bankwallettabbar.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:LoginpageComponent},
  {path:'property',component:PropertyComponent},
  {path:'tax',component:TaxpageComponent},
  {path:'tabledefinition',component:TabledefinitionComponent,pathMatch: 'full'},
  {path:'Paidouts',component:PaidoutsmiscolComponent},
  {path:'bankswallets',component:BankwallettabbarComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
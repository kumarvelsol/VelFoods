import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TabledefinitionComponent } from './tabledefinition/tabledefinition.component';
import { PaidoutsmiscolComponent } from './paidoutsmiscol/paidoutsmiscol.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component:LoginpageComponent
},
{path:'tabledefinition',component:TabledefinitionComponent,pathMatch: 'full'},
{path:'Paidouts',component:PaidoutsmiscolComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }

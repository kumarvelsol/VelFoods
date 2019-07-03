import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemNamesComponent } from './item-names/item-names.component';
import { LoginComponent } from './login/login.component';
import { OrderingComponent } from './ordering/ordering.component';
import { TableStatusComponent } from './restaurant/table-status/table-status.component';
const routes: Routes = [{
  path:'',pathMatch:'full',redirectTo:'restaurant'},
  {path:'itemCategory',component:ItemCategoryComponent},
  {path:'itemNames',component:ItemNamesComponent},
  {path:'restaurant',loadChildren:'./restaurant/restaurant.module#RestaurantModule'},
  {path:'login',component:LoginComponent},
  {path:'ordering',component:OrderingComponent},
  {path:'tablestatus',component:TableStatusComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
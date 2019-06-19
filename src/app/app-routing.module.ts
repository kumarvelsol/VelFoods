import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemNamesComponent } from './item-names/item-names.component';
import { RestaurantModule } from './restaurant/restaurant.module';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'restaurant'},
  {path:'restaurant',loadChildren:'./restaurant/restaurant.module#RestaurantModule'},
  {path:'itemCategory',component:ItemCategoryComponent},
  {path:'itemNames',component:ItemNamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

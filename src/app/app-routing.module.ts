import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantModule } from './restaurant/restaurant.module';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'restaurant'},
  {path:'restaurant',loadChildren:'./restaurant/restaurant.module#RestaurantModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

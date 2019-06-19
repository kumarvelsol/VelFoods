import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemNamesComponent } from './item-names/item-names.component';

const routes: Routes = [{
  path:'',pathMatch:'full',redirectTo:'restaurant'},
  {path:'itemCategory',component:ItemCategoryComponent},
  {path:'itemNames',component:ItemNamesComponent}
  // {path:'restaurant',loadChildren:'./'}
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

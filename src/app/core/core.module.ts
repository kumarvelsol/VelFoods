import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from '../ui/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import  'core-js/es7/array';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
    RouterModule
    
  ],
  exports:[ToolbarComponent,MaterialModule,SharedModule]
})
export class CoreModule { }

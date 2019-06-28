import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,MatStepperModule,
  MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,MatDividerModule,
  MatExpansionModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatSlideToggleModule,
  MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule, MatGridListModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [],
  imports: [ CommonModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,LayoutModule,MatFormFieldModule,MatDatepickerModule,MatSlideToggleModule,MatDividerModule,
    MatNativeDateModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule,MatStepperModule,
    MatGridListModule
  ],
  exports:[ MatButtonModule,MatCheckboxModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,LayoutModule,MatFormFieldModule,MatDatepickerModule,MatSlideToggleModule,MatDividerModule,
    MatNativeDateModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule,MatStepperModule,
    MatGridListModule]
})
export class MaterialModule { }
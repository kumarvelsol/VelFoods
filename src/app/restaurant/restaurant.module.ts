import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatDialogModule,MatButtonModule, MatSelectModule,MatSidenavModule, MatIconModule, MatTabsModule,MatListModule,MatTableModule,MatInputModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TabledefinitionComponent } from './tabledefinition/tabledefinition.component';
import { PaidoutsmiscolComponent } from './paidoutsmiscol/paidoutsmiscol.component';
import { PropertyComponent } from './property/property.component';
import { TaxpageComponent } from './taxpage/taxpage.component';
import { OffersComponent } from './offers/offers.component';
import { BankwallettabbarComponent } from './BanksWallets/bankwallettabbar/bankwallettabbar.component';
import { BanksComponent } from './BanksWallets/banks/banks.component';
import { WalletsComponent } from './BanksWallets/wallets/wallets.component';
import { TablereserveComponent } from './tablereserve/tablereserve.component';
import { SettledbillsComponent } from './Billsettle/settledbills/settledbills.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { TableStatusComponent } from './table-status/table-status.component';
import { BillsettledailogComponent } from './Billsettle/billsettledailog/billsettledailog.component';
import { MiscollectionComponent } from './miscollection/miscollection.component';
import { PaidoutTabComponentComponent } from './paidout-tab-component/paidout-tab-component.component';
import { TabletransferComponent } from './tabletransfer/tabletransfer.component';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { TakeawaydialogComponent } from './takeaway/takeawaydialog/takeawaydialog.component';
import { PettyCashComponent } from './petty-cash/petty-cash.component';


@NgModule({
  declarations: [LoginpageComponent, PropertyComponent, TaxpageComponent,TabledefinitionComponent, PaidoutsmiscolComponent, OffersComponent, BankwallettabbarComponent, BanksComponent, WalletsComponent,TablereserveComponent, TableStatusComponent, SettledbillsComponent, BillpaymentComponent, BillsettledailogComponent, MiscollectionComponent, PaidoutTabComponentComponent, TabletransferComponent, TakeawayComponent, TakeawaydialogComponent, PettyCashComponent],

  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule, MatSidenavModule,
    MatListModule, MatTableModule,
    MaterialModule, FormsModule,
    MatInputModule, ReactiveFormsModule,
    MatIconModule, MatDialogModule,
    MatSelectModule, MatTabsModule,
  ]
})
export class RestaurantModule { }

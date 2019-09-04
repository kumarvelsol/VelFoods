import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SidenavToolbarComponent } from 'src/app/ui/sidenav-toolbar/sidenav-toolbar.component';

@Component({
  selector: 'app-billsettledailog',
  templateUrl: './billsettledailog.component.html',
  styleUrls: ['./billsettledailog.component.css']
})
export class BillsettledailogComponent implements OnInit {
  dataSource;restaurent_id:number;
  displayedColumns:string[] =['itemname','rate','quantity','tax','total'];
  constructor(public thisDialogRef: MatDialogRef<BillsettledailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,private route: ActivatedRoute,public sidenav : SidenavToolbarComponent) {
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
  }
  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}

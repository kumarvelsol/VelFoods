import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-billsettledailog',
  templateUrl: './billsettledailog.component.html',
  styleUrls: ['./billsettledailog.component.css']
})
export class BillsettledailogComponent implements OnInit {
  dataSource;
  displayedColumns:string[] =['itemname','rate','quantity','tax','total'];
  constructor(public thisDialogRef: MatDialogRef<BillsettledailogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}

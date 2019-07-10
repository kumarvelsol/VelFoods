import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'; 
import { BillsettledailogComponent } from '../billsettledailog/billsettledailog.component'

@Component({
  selector: 'app-settledbills',
  templateUrl: './settledbills.component.html',
  styleUrls: ['./settledbills.component.css']
})
export class SettledbillsComponent implements OnInit {
  rows: Array<{billno:string, table:string,date:string,Total:string,Tax:string,Discounttype:string,Discount:number,Status:string}> = [];
  dataSource;
  displayedColumns:string[] =['billno','table','date','Total','Tax','Discounttype','Discount','Status'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.rows = [{billno:"1", table:"1",date:"04-07-2019",Total:"500.00",Tax:"5",Discounttype:"five",Discount:5,Status:"Active"},
                {billno:"2", table:"2",date:"03-07-2019",Total:"1000.00",Tax:"5",Discounttype:"five",Discount:5,Status:"Active"}];
    this.dataSource = this.rows;
  }
  openDialog() {
    const dialogRef = this.dialog.open(BillsettledailogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

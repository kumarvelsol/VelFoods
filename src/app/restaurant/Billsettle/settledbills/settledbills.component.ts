import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'; 
import { BillsettledailogComponent } from '../billsettledailog/billsettledailog.component'
import { RestaurantService } from '../../restaurant.service';
import { JsResponse } from 'src/app/shared/js-response';
import { Apiresponse } from 'src/app/shared/apiresponse';

@Component({
  selector: 'app-settledbills',
  templateUrl: './settledbills.component.html',
  styleUrls: ['./settledbills.component.css']
})
export class SettledbillsComponent implements OnInit {
  rows: Array<{billno:string, table:string,date:string,Total:string,Tax:string,Discounttype:string,Discount:number,Status:string}> = [];
  dataSource;
  displayedColumns:string[] =['billment_id','table_defination_id','insert_date','amount','payment_status'];
  constructor(public dialog: MatDialog,public service1 : RestaurantService) { }
  jsRes : JsResponse; insert_date : string; billment_id : number;

  ngOnInit() {
  }
  public onChange(event : number)
  {
    this.insert_date = "";
    this.service1.billsettleid(1,this.billment_id).subscribe((data:Apiresponse) =>
      {
        this.dataSource = data.Data; 
      });
  }
  public onChangee()
  {
    this.billment_id = null;
    this.service1.billsettle(1,this.insert_date).subscribe((data:Apiresponse) =>
    {
      this.dataSource = data.Data;
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(BillsettledailogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

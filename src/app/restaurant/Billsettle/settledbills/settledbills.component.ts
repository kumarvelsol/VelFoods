import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'; 
import { BillsettledailogComponent } from '../billsettledailog/billsettledailog.component'
import { RestaurantService } from '../../restaurant.service';
import { JsResponse } from 'src/app/shared/js-response';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-settledbills',
  templateUrl: './settledbills.component.html',
  styleUrls: ['./settledbills.component.css']
})
export class SettledbillsComponent implements OnInit {
  rows: Array<{billno:string, table:string,date:string,Total:string,Tax:string,Discounttype:string,Discount:number,Status:string}> = [];
  dataSource;restaurent_id:number;
  displayedColumns:string[] =['billment_id','table_defination_id','insert_date','amount','payment_status'];
  constructor(public dialog: MatDialog,public service1 : RestaurantService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
   }
  jsRes : JsResponse; insert_date : string; billment_id : number;

  ngOnInit() {
  }
  public onChange(event : number)
  {
    this.insert_date = "";
    this.service1.billsettleid(this.restaurent_id,this.billment_id).subscribe((data:Apiresponse) =>
      {
        this.dataSource = data.Data; 
      });
  }
  public onChangee()
  {
    this.billment_id = null;
    this.service1.billsettle(this.restaurent_id,this.insert_date).subscribe((data:Apiresponse) =>
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

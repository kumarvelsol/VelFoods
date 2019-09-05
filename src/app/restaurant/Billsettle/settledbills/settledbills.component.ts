import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { BillsettledailogComponent } from '../billsettledailog/billsettledailog.component'
import { RestaurantService } from '../../restaurant.service';
import { JsResponse } from 'src/app/shared/js-response';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { formatDate } from '@angular/common';
import { SidenavToolbarComponent } from 'src/app/ui/sidenav-toolbar/sidenav-toolbar.component';

export interface ParsingData {
  Bill_no : number;
  Table_no : string;
  Bill_date : string;
  Bill_Amount : number;
  Discount_Amount : number;
  Tax_amount : number;
  GrandTotal_Amount : number;
}
@Component({
  selector: 'app-settledbills',
  templateUrl: './settledbills.component.html',
  styleUrls: ['./settledbills.component.css']
})
export class SettledbillsComponent implements OnInit {
  rows: Array<{billno:string, table:string,date:string,Total:string,Tax:string,Discounttype:string,Discount:number,Status:string}> = [];
  dataSource;restaurent_id:number;
  displayedColumns:string[] =['billment_id','table_defination_id','insert_date','amount','payment_status'];
  constructor(public dialog: MatDialog,public service1 : RestaurantService,private route: ActivatedRoute,public sidenav : SidenavToolbarComponent) {
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
  }
  jsRes : JsResponse; insert_date : string; billment_id : number;
  
  ngOnInit() {
    this.sidenav.ShowSpinnerHandler(true);
    this.service1.billsettleid(this.restaurent_id).subscribe((data:Apiresponse) =>
    {
      this.sidenav.ShowSpinnerHandler(false);
      this.dataSource = data.Data; 
    });
  }
  // public onChange(event : number)
  // {
  //   this.insert_date = "";
  //   this.service1.billsettleid(this.restaurent_id).subscribe((data:Apiresponse) =>
  //     {
  //       this.dataSource = data.Data; 
  //     });
  // }
  public onChangee()
  {
    this.sidenav.ShowSpinnerHandler(true);
    this.billment_id = null;
    this.insert_date = formatDate(this.insert_date, 'yyyy-MM-dd', 'en-US', '+0530');
    this.service1.billsettle(this.restaurent_id,this.insert_date).subscribe((data:Apiresponse) =>
    {
      this.sidenav.ShowSpinnerHandler(false);
      this.dataSource = data.Data;
    });
  } 
  openDialog(billment_id:number,table_name:string,total_amount: number,discount_amount:number,insert_date:string,amount:number,payment_status:string) {
    let p_data : ParsingData = {
      Bill_no : billment_id,
      Table_no : table_name,
      Bill_date : insert_date,
      Bill_Amount : total_amount,
      Discount_Amount : discount_amount,
      Tax_amount : 0,
      GrandTotal_Amount : amount
    }
    const dialogRef = this.dialog.open(BillsettledailogComponent, {
      data : p_data
    });
    console.log(p_data);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
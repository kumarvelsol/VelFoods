import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RestaurantService } from '../../restaurant.service';
import { DatePipe } from '@angular/common';

export interface TableData {
  Bill_no : number;
  Table_no : string;
  Bill_date : string;
  Bill_Amount : number;
  Discount_Amount : number;
  Tax_amount : number;
  GrandTotal_Amount : number;
}

@Component({
  selector: 'app-billsettledailog',
  templateUrl: './billsettledailog.component.html',
  styleUrls: ['./billsettledailog.component.css']
})
export class BillsettledailogComponent implements OnInit {
  dataSource;restaurent_id:number;
  local_data : any;
  BillNo : number;
  BillDate : string;
  TableName : string;
  TotalAmount : number;
  DiscountAmount : number;
  TaxAmount : number;
  GrandTotal : number;
  data_count : number;
  Total : number = 0;
  TaxTotal : number = 0;
  displayedColumns:string[] =['order_itemname','order_rate','order_quantity','order_tax_amount','order_totalamount'];
  constructor(public thisDialogRef: MatDialogRef<BillsettledailogComponent>,public datepipe: DatePipe,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TableData,private route: ActivatedRoute,public service:RestaurantService) {
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
    console.log(data);
    this.local_data = data;
    this.BillNo = data.Bill_no;
    this.BillDate = this.datepipe.transform(data.Bill_date,'dd-MM-yyyy') ;
    this.TableName = data.Table_no;
    //this.TotalAmount = data.Bill_Amount;
    this.DiscountAmount = data.Discount_Amount; 
    //this.TaxAmount = 0;
    this.GrandTotal = data.GrandTotal_Amount;
  }
  // constructor(public dialogRef: MatDialogRef<OffersDialogComponent>,public datepipe: DatePipe,
  // @Optional() @Inject(MAT_DIALOG_DATA) public data: TableData, public service:RestaurantService) {
  // console.log(data);
  // this.local_data = data;
  // this.table_Name = data.table_Name;
  // this.total_amount = data.total_amount;}
  ngOnInit() {
    this.service.getBillItems(this.restaurent_id,this.BillNo).subscribe(data =>{
      this.dataSource = data.Data;
      this.data_count = data.Data.length;
      console.log(this.data_count);
      for(let i = 0;i<this.data_count;i++){
        console.log(data.Data[i].order_totalamount);
        console.log(data.Data[i].order_tax_amount);
        this.Total += data.Data[i].order_totalamount;
        this.TaxTotal += data.Data[i].order_tax_amount;
        console.log(this.Total +" "+this.TaxTotal);
      }
      console.log(this.Total +" & "+this.TaxTotal);
      this.TotalAmount = this.Total - this.TaxTotal;
      this.TaxAmount = this.TaxTotal;
    })
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Responce } from '../shared/js-response';
import { Data } from '@angular/router';
 
export interface UsersData {
  itemname_item_name:string;
  order_quantity:number;
  order_rate:number;
  order_id:number;
  order_totalamount:number;
  order_tax:number;
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  action:string;itemnames:Data[];itemname_item_name:string;orderlist:Responce;
  local_data:any;order_quantity:number;order_id:number=0;order_rate:number;order_totalamount:number=0;
  order_tax:number;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,public service:RestaurantService) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.itemname_item_name = this.local_data.itemname_item_name;
    this.order_quantity = this.local_data.order_quantity;
  }

  ngOnInit() {
    //debugger;
    if(this.action == "Update")
    {
      this.itemname_item_name = this.data.itemname_item_name;
      this.order_quantity = this.data.order_quantity;
    }
    this.service.getitemnames(1).subscribe((data:Responce)=> {
      this.itemnames = data.Data;
    });
  }
  onChange() {  
    console.log(this.data.itemname_item_name);
    this.service.getitemnames(1).subscribe((data:Responce)=> {
      this.orderlist = data;
      for(let i=0;i<this.orderlist.Data.length;i++)
      {
        if(this.orderlist.Data[i].itemname_item_name == this.data.itemname_item_name)
        {
          this.data.order_rate = this.orderlist.Data[i].item_dinein_amount;
          this.data.order_tax = this.orderlist.Data[i].item_dinein_tax;
          console.log(this.data.order_rate,this.data.order_tax);
          break;
        }
      }
    });
  }
  totalwotax:number;
  onChangeQuantity()
  {
    //this.data.order_id = ++this.order_id;
    this.totalwotax = this.data.order_rate * this.data.order_quantity;
    this.data.order_totalamount = (this.totalwotax * (this.data.order_tax/100)) + this.totalwotax;
    console.log(this.data.order_totalamount);
  }
  doAction(){
    this.dialogRef.close({event:this.action});

  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}

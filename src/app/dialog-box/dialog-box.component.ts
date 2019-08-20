import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Responce } from '../shared/js-response';
import { Data } from '@angular/router';
 
export interface UsersData {
  order_itemname:string;
  itemname_id:number;
  order_quantity:number;
  order_rate:number;
  order_id:number;
  order_totalamount:number;
  order_tax_amount:number;
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  action:string;itemnames:Data[];order_itemname:string;orderlist:Responce;
  local_data:any;order_quantity:number;order_id:number=0;order_rate:number;order_totalamount:number=0;
  order_tax:number;disable:boolean=false;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData, public service:RestaurantService) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.order_itemname = this.local_data.order_itemname;
    this.order_quantity = this.local_data.order_quantity;
  }
  ngOnInit() {
    if(this.action == "Update")
    {
      this.disable = true;
    }
    this.service.getitemnames(1).subscribe((data:Responce)=> {
      this.itemnames = data.Data;
    });
  }
  onChange() {  
    console.log(this.data.order_itemname);
    this.service.getitemnames(1).subscribe((data:Responce)=> {
      this.orderlist = data;
      for(let i=0;i<this.orderlist.Data.length;i++)
      {
        if(this.orderlist.Data[i].itemname_item_name == this.data.order_itemname)
        {
          this.data.itemname_id = this.orderlist.Data[i].itemname_id;
          this.data.order_rate = this.orderlist.Data[i].item_dinein_amount;
          this.data.order_tax_amount = this.orderlist.Data[i].item_dinein_tax;
          console.log(this.data.order_rate,this.data.order_tax_amount);
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
    this.data.order_totalamount = (this.totalwotax * (this.data.order_tax_amount/100)) + this.totalwotax;
    console.log(this.data.order_totalamount);
  }
  doAction(){
    this.dialogRef.close({event:this.action});
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}

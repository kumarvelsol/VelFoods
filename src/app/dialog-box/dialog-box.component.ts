import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Responce } from '../shared/js-response';
import { Data } from '@angular/router';
 
export interface UsersData {
  itemname_item_name:string;
  order_quantity:number;
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  action:string;itemnames:Data[];itemname_item_name:string;
  local_data:any;order_quantity:string;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,public service:RestaurantService) {
    console.log(data);
    this.local_data = (this.itemname_item_name,this.order_quantity);
    this.action = "Add";
  }

  ngOnInit() {
    this.service.getitemnames(1).subscribe((data:Responce)=> {
      this.itemnames = data.Data;
    });
  }
  doAction(){
    this.dialogRef.close({event:this.action});
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}

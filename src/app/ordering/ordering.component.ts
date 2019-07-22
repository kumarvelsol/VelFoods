import { Component, OnInit, ViewChild  } from '@angular/core';
import {ServiceService} from '../service.service';
import { order, room } from '../Model/ordermodel';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { element } from '@angular/core/src/render3';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Responce } from '../shared/JsResponse';
import { Data } from '@angular/router';

export interface UsersData {
  order_id:number;
  order_itemname:string;
  order_rate:number;
  order_quantity:number;
  order_totalamount:number;
}
// const ELEMENT_DATA: UsersData[] = [
//   {order_id:1,order_itemname: 'Chicken Family', order_rate : 290,order_quantity :   2, order_totalamount : 580},
//   {order_id:2,order_itemname: 'Mutton Family',  order_rate : 360,order_quantity :   1, order_totalamount : 360},
//   {order_id:3,order_itemname: 'Gongura Chicken',order_rate : 120,order_quantity :   1, order_totalamount : 120},
//   {order_id:4,order_itemname: 'Chicken 65',     order_rate : 150,order_quantity :   2, order_totalamount : 300}
// ];
 

@Component({
 selector: 'app-ordering',
 templateUrl: './ordering.component.html',
 providers:[ServiceService],
 styleUrls: ['./ordering.component.css'],
})
export class OrderingComponent implements OnInit {
  order_id:number;
  order_itemname:string;
  order_rate:number;
  order_quantity:number;
  order_totalamount:number;
  restaurent_id:number;
  itemname_id:number;
  table_defination_id:number;
  order_status:string;
  table_name:string;
  insert_by:string;
  insert_date:Date;
  kot_id:number;
  local_data:any;
  displayedColumns: string[] = ['order_id','order_itemname','order_rate', 'order_quantity','order_totalamount', 'action'];
 // dataSource = ELEMENT_DATA;
  dataSource;
  userlist:Responce;
  rooms : Data[];
  name:string;
  roomnos :string;
  colors :string;
  BACKGROUND_COLOR:string;
  colorrs : 'green';
  orn :'orange';
  redd :'red';
  colorr:string;
  colorFlag: any;
  
  @ViewChild(MatTable) table: MatTable<any>; 
  constructor(private _roomservice : RestaurantService,public dialog: MatDialog) {
   }
  
 ngOnInit() {
    this._roomservice.gettabledata(1).subscribe((data : Responce) =>
    {
      this.userlist=data;
      this.rooms = this.userlist.Data
    });
  }
  onbuttonclick($event,table_name){
    this.colorr;
    alert(table_name);
  }
openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      order_id:d.getTime(),
      order_itemname:row_obj.order_itemname,
      order_rate:row_obj.order_rate,
      order_quantity:row_obj.order_quantity,
      order_totalamount:row_obj.order_totalamount
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.order_id == row_obj.order_id){
        value.order_itemname = row_obj.order_itemname;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.order_id != row_obj.order_id;
    });
  }
}
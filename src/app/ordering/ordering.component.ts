import { Component, OnInit, ViewChild  } from '@angular/core';
import {ServiceService} from '../service.service';
import { order, room } from '../Model/ordermodel';
import { MatDialog, MatTable, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { element } from '@angular/core/src/render3';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Responce } from '../shared/js-response';
import { Data } from '@angular/router';
import { Apiresponse } from '../shared/apiresponse';

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
  orderlist:Responce;itemname_item_name:string;
  order_id:number=0;order_tax:number;
  order_itemname:string;
  order_rate:number;
  order_quantity:number;
  order_totalamount:number=0;
  restaurent_id:number;
  itemname_id:number;
  table_defination_id:number;
  order_status:string;
  table_name:string;
  insert_by:string;
  insert_date:Date;
  kot_id:number;
  local_data:any;
  displayedColumns: string[] = ['itemname_item_name','order_rate', 'order_quantity','order_tax','order_totalamount', 'action'];
 // dataSource = ELEMENT_DATA;
 dataSource: any[] = [];
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
  tables :Data[]; table_pax : number;
  listcount: number; tname:number; table_capatain : string;
  kotid : number;count : number;

  @ViewChild(MatTable) table: MatTable<any>; 
  constructor(private _roomservice : RestaurantService,public dialog: MatDialog) {
   }
  
 ngOnInit() {
    this._roomservice.gettabledata(1).subscribe((data : Responce) =>
    {
      this.userlist=data;
      this.rooms = this.userlist.Data
    });
    this._roomservice.getorders(1).subscribe((data : Responce) =>
    {
      this.count = data.Data.length;
      this.kotid = this.count + 1;
    });
  }
  onbuttonclick($event,table_name){
    this.colorr;
   // alert(table_name);
   this.tname = table_name;
   this._roomservice.gettabledata(1).subscribe((data : Responce) =>
   {
    this.listcount = data.Data.length;
    // this.table_name = 
    for(let i = 1;i<=this.listcount;i++)
    {
        if(i == this.tname)
        {
          this.table_name = table_name;
          this.table_pax = data.Data[i-1].table_pax;
          this.table_capatain = data.Data[i-1].table_capatain;
        }
    }
     this.tables = data.Data;
   });
  }
    // openDialog(action,obj) {
    // obj.action = action;
    // const dialogRef = this.dialog.open(DialogBoxComponent, {
    //   width: '250px',
    //   data:{itemname_item_name:this.order_itemname,order_quantity:this.order_quantity}
    // });
 
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //     if(result.event == 'Add'){
    //       this.order_itemname = result.itemname_item_name;
    //       this.order_quantity = result.order_quantity;
    //       console.log(this.order_itemname);
    //       //this.addRowData(result.data);
    //     }else if(result.event == 'Update'){
    //       this.updateRowData(result.data);
    //     }else if(result.event == 'Delete'){
    //       this.deleteRowData(result.data);
    //     }
    //   });
    // }
    // {action:action ,order_id:++this.order_id,itemname_item_name: this.itemname_item_name,order_rate:this.order_rate, order_quantity: this.order_quantity,order_totalamount:this.order_totalamount}
    openDialog(action,obj): void {
      obj.action = action;
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '250px',
        data: obj
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result.action == 'Add')
        {
          console.log(result);
          this.dataSource.push(result); 
          this.dataSource = [...this.dataSource]; 
        }
        else if(result.action == 'Update')
        {
          //this.updateRowData(result.data); 
        }
        else if(result.action == 'Delete')
        {
          //this.deleteRowData(result.data);
        }
      });
    }

  addRowData(row_obj){
    this.dataSource.push({
      order_id:++this.order_id,
      itemname_item_name: row_obj.itemname_item_name,
      order_rate:row_obj.order_rate,
      order_quantity: row_obj.order_quantity,
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
      return value.itemname_item_name != row_obj.itemname_item_name;
    });
  }
}
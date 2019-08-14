import { Component, OnInit, ViewChild  } from '@angular/core';
import {ServiceService} from '../service.service';
import { order, room } from '../Model/ordermodel';
import { MatDialog, MatTable, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { element } from '@angular/core/src/render3';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Responce, JsResponse } from '../shared/js-response';
import { Data } from '@angular/router';
import { Apiresponse } from '../shared/apiresponse';
import { Tabledefinition } from '../shared/tabledefinition';

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
  orderlist:any;itemname_item_name:string;
  rows: Array<{itemname_item_name:string,order_rate:number,order_quantity:number,order_tax:number,order_totalamount:number}> = [];
  order_id:number=0;tax:any[] = [];jsRes :JsResponse;
  itemnames:any[] =[];
  Rate:any[] =[];
  quantity:any[] =[];
  total:any[] =[];
  restaurent_id:number;
  itemnameid:any[] =[];
  table_defination_id:number;
  order_status:string;
  table_name:number;
  order_captain:string;
  insert_by:string;
  insert_date:Date;
  kot_id:number;
  local_data:any;
  displayedColumns: string[] = ['itemname_item_name','order_rate', 'order_quantity','order_tax','order_totalamount', 'action'];
 // dataSource = ELEMENT_DATA;
 dataSource: any[] = [];
 orders:Apiresponse;
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
  greencount:number=0;orangecount:number=0;redcount:number=0;whitecount:number=0;bluecount:number=0;
  disableadd:boolean=true;
  @ViewChild(MatTable) table: MatTable<any>; 
  constructor(private service : RestaurantService,public dialog: MatDialog) {
   }
  
 ngOnInit() {
    this.gettingtablenumbers();
    this.service.getorders(1).subscribe((data : Responce) =>
    {
      this.count = data.Data.length;
      this.kot_id = this.count + 1;
      console.log(data);
    });
  }
  gettingtablenumbers()
  {
    this.service.gettabledata(1).subscribe((data : Responce) =>
    {
      this.userlist=data;
      this.rooms = this.userlist.Data;
      console.log(this.rooms);
      for(let i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].BACKGROUND_COLOR == "Green")
        {
          this.greencount= ++this.greencount;
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "Orange")
        {
          this.orangecount= ++this.orangecount;
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "Blue")
        {
          this.bluecount= ++this.bluecount;
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "White")
        {
          this.whitecount= ++this.whitecount;
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "Red")
        {
          this.redcount= ++this.redcount;
        }
      }
    });
  }
  onsaveclick()
  {
    if(this.dataSource == null || this.table_name == null || this.table_pax == null || this.table_capatain == "")
    {
      alert("Please fill all fields");
    }
    else
    {
      //this.table_name=this.table_name;
      //this.table_pax=this.table_pax;
      this.order_captain = this.table_capatain;
      for(let i=0;i<this.dataSource.length;i++)
      {
        this.itemnames.push(this.dataSource[i].itemname_item_name);
        this.itemnameid.push(this.dataSource[i].itemname_id );
        this.Rate.push(this.dataSource[i].order_rate);
        this.quantity.push(this.dataSource[i].order_quantity);
        this.total.push(this.dataSource[i].order_totalamount);
        this.tax.push(this.dataSource[i].order_tax);
      }
      this.restaurent_id=1;
      this.table_defination_id= this.table_name;
      this.order_status="Running";
      //this.insert_by="aaa";
      //this.insert_date=this.insert_date;
      //this.kot_id=this.kot_id;
      this.service.addingorder(this.itemnames,this.Rate,this.quantity,this.total,this.tax,1,this.itemnameid,
                              this.table_defination_id,this.order_captain,this.order_status,
                              ).subscribe(data =>
        {
          if(data.code == 200)
          {
            alert("Order Added Succesfully.!");
            this.onclear();
          }else{ alert("Failed to Insert data");}
       });
    }
  }
  table_description:string;table_status:string;table_steward:string;table_view:string;
  countorder:number;
  onclear()
  {
    this.table_name = null;this.table_pax = null;this.table_capatain = "";
    this.dataSource = null;this.order_status = "";
  }
  onbuttonclick($event,table_name){
    this.colorr;
   this.tname = table_name;
   if(this.tname != null)
   {
     this.disableadd = false;
   }
   this.service.gettabledata(1).subscribe((data : Responce) =>
   {
    this.listcount = data.Data.length;
    for(let i = 1;i<=this.listcount;i++)
    {
        if(i == this.tname)
        {
          this.table_name = table_name;
          this.table_pax = data.Data[i-1].table_pax;
          this.table_capatain = data.Data[i-1].table_capatain;
        }
        // if(data.Data[i-1].BACKGROUND_COLOR == "Orange")
        // {
        //   this.service.getorderitems(1,this.table_name).subscribe((data:Responce) =>{
      
        //     this.dataSource.push(data.Data); 
        //     this.dataSource = [...this.dataSource];
        //     console.log(this.dataSource);
        //   });
        //   break;
        // }
    }
    
     this.tables = data.Data;
   });
  }
  // for(let a=0;a<data.Data.length;a++)
  // {
  //   this.rows =[{itemname_item_name : data.Data[a].order_itemname,order_rate : data.Data[a].order_rate,order_quantity : data.Data[a].order_quantity,order_totalamount : data.Data[a].order_totalamount,order_tax : data.Data[a].order_tax_amount}];
  // }
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
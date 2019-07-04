import { Component, OnInit, ViewChild  } from '@angular/core';
import {ServiceService} from '../service.service';
import { order, room } from '../Model/ordermodel';
import { MatDialog, MatTable } from '@angular/material';
import { NgStyle } from '@angular/common';
import { style } from '@angular/animations';
import { Button } from 'protractor';
import { templateJitUrl } from '@angular/compiler';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { element } from '@angular/core/src/render3';

export interface UsersData {
  id:number;
  ItemName: string;
  Rate: number;
  Quantity : number;
  Totalamount : number;
}
const ELEMENT_DATA: UsersData[] = [
  {id:1,ItemName: 'Chicken Family', Rate : 290,Quantity :   2, Totalamount : 580},
  {id:2,ItemName: 'Mutton Family',  Rate : 360,Quantity :   1, Totalamount : 360},
  {id:3,ItemName: 'Gongura Chicken',Rate : 120,Quantity :   1, Totalamount : 120},
  {id:4,ItemName: 'Chicken 65',     Rate : 150,Quantity :   2, Totalamount : 300}
];

@Component({
 selector: 'app-ordering',
 templateUrl: './ordering.component.html',
 providers:[ServiceService],
 styleUrls: ['./ordering.component.css'],
})
export class OrderingComponent implements OnInit {
  local_data:any;
  displayedColumns: string[] = ['ItemName','Rate', 'Quantity','Totalamount', 'action'];
  dataSource = ELEMENT_DATA;
  userlist:order;
  datasource;
  rooms : room[];
  name:string;
  roomnos :string;
  colors :string;
  BACKGROUND_COLOR:string;
  colorrs : 'green';
  orn :'orange';
  redd :'red';
  colorr:string;
  //mystyles :string;
  colorFlag: any;
  //rooms :any ={};
  
  @ViewChild(MatTable) table: MatTable<any>; //,{static:true}
  constructor(private _roomservice : ServiceService,public dialog: MatDialog) {
   }
  
 ngOnInit() {
    debugger;
    this._roomservice.roomno().subscribe((data : order) =>
    {
      this.userlist=data;
      this.rooms = this.userlist.Data;
      for(let i=0; i<this.rooms.length ; i++)
      {
        if(this.rooms[i].BACKGROUND_COLOR == "Green")
        {
          // this.colorr = this.rooms[i].ROOM_NO.toString();
          // //this.colorr ='#FF5733';
          // return this.colorr = NgStyle [ 'green']
        }
        if(this.rooms[i].BACKGROUND_COLOR == "Orange")
        {
        // alert('orange');
        }
        if(this.rooms[i].BACKGROUND_COLOR =="Red")
        {
          //this.colors =this.rooms[i].ROOM_NO.toString();
          //this.colorr ='#FF5737';
          //this.colors =this.colorFlag? 'back-ground' :'green';
          //alert('red');
        }
      }
      console.log(this.userlist.Data);
    });
    this.getmystyles(this.aa);
  }
  onbuttonclick($event,ROOM_NO){
    this.colorr;
    alert(ROOM_NO);
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
       id:d.getTime(),
      ItemName:row_obj.ItemName,
      Rate:row_obj.Rate,
      Quantity:row_obj.Quantity,
      Totalamount:row_obj.Totalamount
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.ItemName = row_obj.ItemName;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }


  public  aa : string ;
  getmystyles(aa)
  {
  }
  save(){
    alert("Items saved successfully");
  }
}
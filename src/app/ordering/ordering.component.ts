import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { order, room } from '../Model/ordermodel';
import { NgStyle } from '@angular/common';
import { style } from '@angular/animations';
import { Button } from 'protractor';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  providers:[ServiceService],
  styleUrls: ['./ordering.component.css'],
 })
export class OrderingComponent implements OnInit {
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
  constructor(private _roomservice : ServiceService) {
   }
  
  ngOnInit() {
  
    this._roomservice.roomno().subscribe((data : order) =>
    {
      this.userlist=data;
      this.rooms = this.userlist.Data;       
      for(let i=0; i<this.rooms.length ; i++){
        if(this.rooms[i].BACKGROUND_COLOR == "Green")
        {
          //this.colorr ='#FF5733';
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "Orange")
        {
         // alert('orange');
        }
        else if(this.rooms[i].BACKGROUND_COLOR =="Red")
        {
          this.colorr ='#FF5737';
         // alert('red');
        }
       }
       
      console.log(this.userlist.Data);
    });
  }
  onbuttonclick($event,ROOM_NO){
    this.colorr ;
    alert(ROOM_NO);
  }
  
 getmystyles()
 {
 
    }
  


}

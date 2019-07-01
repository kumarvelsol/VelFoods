import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { order, room } from '../Model/ordermodel';

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
  name : string;
  roomnos : string;
  colors : string;
  BACKGROUND_COLOR : string;
  colorrs : string;
  orn : 'orange';
  redd : 'red';
  colorr : any = {};
  //mystyles :string;
  colorFlag: any;
  //rooms :any ={};
  constructor(private _roomservice : ServiceService) {
  }
  ngOnInit() {
    this._roomservice.roomno().subscribe((data : order) =>
    {
      this.userlist = data;
      this.rooms = this.userlist.Data;
      for(let i=0; i<this.rooms.length ; i++){
        if(this.rooms[i].BACKGROUND_COLOR == "Green")
        {
          this.colorr[i] ='#00F300';
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "orange")
        {
          this.colorr[i] ='#F39000';
        }
        else if(this.rooms[i].BACKGROUND_COLOR =="Red")
        {
          this.colorr[i] ='#F30000';
        }
      }
      console.log(this.colorr);
      console.log(this.colorrs);
      console.log(this.userlist.Data);
    });
  }
  onbuttonclick($event,ROOM_NO){
    this.colorr;
    alert(ROOM_NO);
  }
  getmystyles()
  {
  }
}
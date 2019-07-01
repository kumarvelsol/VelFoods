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
<<<<<<< HEAD
          this.colorr[i] ='#00F300';
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "orange")
=======

          // this.colorr = this.rooms[i].ROOM_NO.toString();
          // //this.colorr ='#FF5733';
          // return this.colorr = NgStyle [ 'green']
        }
        if(this.rooms[i].BACKGROUND_COLOR == "Orange")
>>>>>>> 30b4e81572f728dc7bc0383d67875da0e101ce93
        {
          this.colorr[i] ='#F39000';
        }
        if(this.rooms[i].BACKGROUND_COLOR =="Red")
        {
<<<<<<< HEAD
          this.colorr[i] ='#F30000';
=======
          //this.colors =this.rooms[i].ROOM_NO.toString();
          //this.colorr ='#FF5737';
         // this.colors =this.colorFlag? 'back-ground' :'green';
         // alert('red');
>>>>>>> 30b4e81572f728dc7bc0383d67875da0e101ce93
        }
      }
      console.log(this.colorr);
      console.log(this.colorrs);
      console.log(this.userlist.Data);
    });
    this.getmystyles(this.aa);
  }
  onbuttonclick($event,ROOM_NO){
    this.colorr;
    alert(ROOM_NO);
  }
<<<<<<< HEAD
  getmystyles()
  {
=======
  
  public  aa : string ;
 getmystyles(aa)
 {
//   this._roomservice.roomno().subscribe((data : order) =>
//   {
//   this.userlist=data;
//   this.rooms = this.userlist.Data;       
//   for(let i=0; i<this.rooms.length ; i++){
//   var s =  this.rooms[i].ROOM_NO.toString()
//     switch(aa){

//      case this.rooms[i].BACKGROUND_COLOR ='Green':
//        return s ='green';
//        case this.rooms[i].BACKGROUND_COLOR ='orange':
//           return s ='orage';
//           case this.rooms[i].BACKGROUND_COLOR ='Red':
//               return s ='red';
//     }
//   }
//   console.log(this.userlist.Data);
//     });
>>>>>>> 30b4e81572f728dc7bc0383d67875da0e101ce93
  }
}
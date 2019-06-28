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

   //mystyles :string;
  colorFlag: any;
   //rooms :any ={};
  constructor(private _roomservice : ServiceService) {
   }
  
  ngOnInit() {
  
    this._roomservice.roomno().subscribe((data : order) =>
    {
      //debugger;
      this.userlist=data;
      this.rooms = this.userlist.Data;
       
      for(let i=0; i<this.rooms.length ; i++){
        // if(this.rooms[i].BACKGROUND_COLOR =="Green")
        // {
        //   var aa = this.rooms[i].ROOM_NO.toString();
        //    aa =this.colorFlag? '':'green';
        //    return aa;
        // }
        // else if(this.rooms[i].BACKGROUND_COLOR =="Orange")
        // {
        //   var bb = this.rooms[i].ROOM_NO.toString();
        //   // NgStyle :[
        //      bb =this.colorFlag? 'background-color': 'orange' ;

        //  //  ]
        //    return bb  ;
        // }
        if(this.rooms[i].BACKGROUND_COLOR == "Green"){
          //alert('green');
         // this.colors =this.rooms[i].ROOM_NO.toString();
         // return { 'background-color':this.colors?'': 'primary' };
         
         //this.colors = this.rooms[i].ROOM_NO.toString();
         // var aa ='green' //  this.colors = this.colorFlag?'':'green';  
       //  return this.rooms[i].ROOM_NO = style[ this.colorFlag? 'background-color':'green'];
       //return this.rooms[i].ROOM_NO =NgStyle ["{'background-color':'green' }"]
       //this.colors =this.rooms[i]
        }
        else if(this.rooms[i].BACKGROUND_COLOR == "Orange")
        {
          alert('orange');
        }
        else if(this.rooms[i].BACKGROUND_COLOR =="Red")
        {
          alert('red');
        }
       }
       
      console.log(this.userlist.Data);
    });
  }
  onbuttonclick($event,ROOM_NO){
     
   // alert(ROOM_NO);
  }
  // getmystyle(greens , orange , Red ,yellow){

  //   for(let i=0; i<this.rooms.length ; i++){
  //     this.roomnos =this.rooms[i].ROOM_NO.toString();
  //     if(this.rooms[i].BACKGROUND_COLOR =="Green")
  //     {     
  //      // this.roomnos = this.colorFlag? '':'green';
  //      greens ={
  //        // 'background-color':this.colorFlag? '':'green', 
  //        NgStyle: [
  //          this.roomnos = this.colorFlag? '':'green',
  //        ]
  //       }
  //       return greens;
  //     }
  //     else if(this.rooms[i].BACKGROUND_COLOR =="Orange")
  //     {
  //       this.roomnos = this.colorFlag? '':'orange'
  //      orange ={
  //       'background-color':this.colorFlag? '':'orange',   
  //      } 
  //      return orange;
  //     }
  //     else if(this.rooms[i].BACKGROUND_COLOR =="Red")
  //     {
  //       this.roomnos =this.colorFlag? '':'red';
  //       Red ={
  //         'background-color':this.colorFlag? '':'red',   
  //       }
  //       return Red;
       
  //     }
  //    }
  // //  let mystyles = {
     
  // //   'background-color':this.colorFlag? '':'green',
  // //  //'color': this.colorFlag ? 'black' : 'green',
  // //  } ;
  // //  return mystyles;      
 // }
 getmystyles()
 {
   //debugger;
    //let mystyles;
    //for(let i=0; i<this.;i++)
    //{
      //if( this.rooms[i].BACKGROUND_COLOR == 'Green')
      //{
        
      //   this.colors = this.rooms[i].ROOM_NO;
      // // var aa ='green' //  this.colors = this.colorFlag?'':'green';  
      // return this.rooms[i].ROOM_NO =NgStyle[ this.colorFlag? '':'green'];   
      //}
      
    }
    
// }
//  color(){
//    for(let i=0; i<this.rooms.length;i++){
     
//     if(this.colorrs == this.rooms[i].BACKGROUND_COLOR){
//       alert('green');
//     }
//     else if(this.orn ==this.rooms[i].BACKGROUND_COLOR)
//     {
//       alert('orange');
//     }
//     else if(this.redd ==this.rooms[i].BACKGROUND_COLOR)
//     {
//       alert('red');
//     }
//    }
   
//  }
}

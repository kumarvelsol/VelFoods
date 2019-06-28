import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  constructor() { }
  dates_slide : boolean = false;
  times_slide : boolean = false;
  days_slide : boolean = false;
  per_slide : boolean = false;
  minbill_slide : boolean = false;
  maxdis_slide : boolean = false;
  from_date : Date;
  to_date : Date;
  from_time : Time;
  to_time : Time;
  percentage : string;
  daysSelected : string;
  minbill_amount : string;
  maxdis_amount : string;
  to_date_disable : boolean;
  from_date_disable : boolean;
  from_time_disable : boolean;
  to_time_disable : boolean;
  daysSelected_disable : boolean;
  mon_disable : boolean;  monday : boolean;
  tue_disable : boolean;  tuesday : boolean;
  wed_disable : boolean;  wednesday : boolean;
  thur_disable : boolean; thursday : boolean;
  fri_disable : boolean;  friday : boolean;
  sat_disable : boolean;  saturday : boolean;
  sun_disable : boolean;  sunday : boolean;
  per_disable : boolean;
  minbill_disable : boolean;
  maxdis_disable : boolean;
  buttoncontent : string = "Save";
  ngOnInit() {
    this.to_date_disable = true;
    this.from_date_disable = true;
    this.to_time_disable = true;
    this.from_time_disable = true;
    this.daysSelected_disable = true;
    this.per_disable = true;
    this.minbill_disable = true;
    this.maxdis_disable = true;
    this.disablecheckbox();
  }
  onDatesValid(){
    if(this.dates_slide == true){
      this.from_date = null;
      this.to_date = null;
      this.to_date_disable = false;
      this.from_date_disable = false;
    }else{
      this.from_date = null;
      this.to_date = null;
      this.to_date_disable = true;
      this.from_date_disable = true;
    }
  }
  onTimesValid(){
    if(this.times_slide == true){
      this.from_time = null;
      this.to_time = null;
      this.to_time_disable = false;
      this.from_time_disable = false;
    }else{
      this.from_time = null;
      this.to_time = null;
      this.to_time_disable = true;
      this.from_time_disable = true;
    }
  }
  onDaysValid(){
    if(this.days_slide == true){
      this.daysSelected = "";
      this.daysSelected_disable = false;
      this.enable_checkboxes();
    }else{
      this.daysSelected = "";
      this.daysSelected_disable = true;
      this.disablecheckbox();
    }
  }
  onPerValid(){
    if(this.per_slide == true){
      this.percentage = "";
      this.per_disable = false;
    }else{
      this.percentage = "";
      this.per_disable = true;
    }
  }
  onMinBillValid(){
    if(this.minbill_slide == true){
      this.minbill_amount = "";
      this.minbill_disable = false;
    }else{
      this.minbill_amount = "";
      this.minbill_disable = true;
    }
  }
  onMaxDisValid(){
    if(this.maxdis_slide == true){
      this.maxdis_amount = "";
      this.maxdis_disable = false;
    }else{
      this.maxdis_amount = "";
      this.maxdis_disable = true;
    }
  }
  ondayschanged(val){
    if(this.daysSelected == "WeekEnds"){
      this.monday = false;        this.mon_disable = true;           
      this.tuesday = false;       this.tue_disable = true;     
      this.wednesday = false;     this.wed_disable = true;        
      this.thursday = false;      this.thur_disable = true;        
      this.friday = false;        this.fri_disable = true;      
      this.saturday = true;       this.sat_disable = true;
      this.sunday = true;         this.sun_disable = true;
    }else if(this.daysSelected == "WeekDays"){
      this.monday = true;         this.mon_disable = true;   
      this.tuesday = true;        this.tue_disable = true;    
      this.wednesday = true;      this.wed_disable = true;          
      this.thursday = true;       this.thur_disable = true;            
      this.friday = true;         this.fri_disable = true;     
      this.saturday = false;      this.sat_disable = true;     
      this.sunday = false;        this.sun_disable = true;
    }else if(this.daysSelected == "AllDays"){
      this.monday = true;         this.mon_disable = true;      
      this.tuesday = true;        this.tue_disable = true;      
      this.wednesday = true;      this.wed_disable = true;           
      this.thursday = true;       this.thur_disable = true;      
      this.friday = true;         this.fri_disable = true;     
      this.saturday = true;       this.sat_disable = true;    
      this.sunday = true;         this.sun_disable = true;  
    }else if(this.daysSelected == "ParticularDays"){
      this.enable_checkboxes();
    }
  }
  onsaveclick(){
    if(this.dates_slide == true){
      if(this.from_date == null || this.to_date == null){
        alert("Please Enter Dates Or Switch off the Dates Section");
      }
    }else{
      this.from_date = null;
      this.to_date = null;
    }
    if(this.times_slide == true){
      if(this.from_time == null || this.to_time == null){
        alert("Please Enter Time fields Or Switch off the Time Section");
      }
    }else{
      this.from_time = null;
      this.to_time = null;
    }
    if(this.days_slide == true){
    }else{
    }
    if(this.per_slide == true){
      if(this.percentage == null){
        alert("Please Enter Percentage Or Switch off the Percentage Section");
      }
    }else{
      this.percentage == "";
    }
    if(this.minbill_slide == true){
      if(this.minbill_amount == null){
        alert("Please Enter Minimum Bill Amount Or Switch off the Min Bill Section");
      }
    }else{
      this.minbill_amount == "";
    }
    if(this.maxdis_slide == true){
      if(this.maxdis_amount == null){
        alert("Please Enter Max Discount Amount Or Switch off the Max Discount Section");
      }
    }else{
      this.maxdis_amount == "";
    }
  }
  onclearclick(){
    this.dates_slide = false;
    this.onDatesValid();
    this.times_slide = false;
    this.onTimesValid();
    this.days_slide = false;
    this.onDaysValid();
    this.maxdis_slide = false;
    this.onMaxDisValid();
    this.per_slide = false;
    this.onPerValid();
    this.minbill_slide = false;
    this.onMinBillValid();
    this.maxdis_slide = false;
    this.onMaxDisValid();
  }
  public enable_checkboxes(){
    this.monday = false;
    this.tuesday = false;
    this.wednesday = false;
    this.thursday = false;
    this.friday = false;
    this.saturday = false;
    this.sunday = false;
    this.mon_disable = false;
    this.tue_disable = false;
    this.wed_disable = false;
    this.thur_disable = false;
    this.fri_disable = false;
    this.sat_disable = false;
    this.sun_disable = false;
  }
  public disablecheckbox(){
    this.monday = false;
    this.tuesday = false;
    this.wednesday = false;
    this.thursday = false;
    this.friday = false;
    this.saturday = false;
    this.sunday = false;
    this.mon_disable = true;
    this.tue_disable = true;
    this.wed_disable = true;
    this.thur_disable = true;
    this.fri_disable = true;
    this.sat_disable = true;
    this.sun_disable = true;
  }
}
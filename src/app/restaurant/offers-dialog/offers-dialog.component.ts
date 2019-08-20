import { Component, Inject, Optional,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { Responce, Data } from 'src/app/shared/js-response';
import { OfferUp } from 'src/app/shared/interfaces/offers';
import { DatePipe } from '@angular/common';

export interface TableData {
  table_Name : number;
  total_amount : number;
  DiscountAmount : number;
  AmountAfterDiscount : number;
  OfferId : number;
  Percentage : number;
  MinBillAmount : number;
  MaxDiscountAmount : number;
  PromoCode : string;
}
@Component({
  selector: 'app-offers-dialog',
  templateUrl: './offers-dialog.component.html',
  styleUrls: ['./offers-dialog.component.css']
})
export class OffersDialogComponent implements OnInit {
  table_Name : number;
  total_amount : number;
  local_data : any;
  Offers : Data[];
  OfferApplyMessage : string;
  offers_count : number;
  PromoCode : string;
  SelectedOffer : string = "None";
  isCheckvisible : boolean = false;
  isCancelvisible : boolean = false;
  isdetailsvisible : boolean = false;
  constructor(public dialogRef: MatDialogRef<OffersDialogComponent>,public datepipe: DatePipe,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TableData, public service:RestaurantService) {
    console.log(data);
    this.local_data = data;
    this.table_Name = data.table_Name;
    this.total_amount = data.total_amount;
  }
  ngOnInit() {
    this.service.ActiveOffers(1).subscribe((data : Responce) =>
    {
      this.offers_count = data.Data.length;
      this.Offers = data.Data;
    });
  }
  OfferCheck : boolean = true;
  DateCheck : boolean = true;
  DayCheck : boolean = true;
  TimeCheck : boolean = true;
  MinBillCheck : boolean = true;
  MaxDisAmount : number;
  Percentage : number;
  Discount : number;
  AmountAfterDiscount : number;
  onbuttonclick($event,Promo){
    this.SelectedOffer = Promo.promo_code_name;
    this.PromoCode = Promo.promo_code;
    // console.log("Min Status : "+ Promo.minbill_status+"\nMin Amount : "+ Promo.minbill_amount);
    // console.log("offers_id : "+ Promo.offers_id+"\npercentage : "+ Promo.percentage);
    // console.log("Promocode Name : "+ Promo.promo_code_name+"\nPromo Code : "+ Promo.promo_code);
    // console.log("Max Status : "+ Promo.maximum_bill_status+"\nMax Amount : "+ Promo.maximum_bill_amount);
    // console.log("Day Status : "+ Promo.Day_status+"\nDay Type : "+ Promo.Day_type+"\nDays : "+ Promo.Days);
    // console.log("Time Status : "+ Promo.Active_time_status+"\nFrom Time : "+ Promo.from_time+"\nTo Time : "+ Promo.to_time);
    // console.log("Date Status : "+ Promo.Active_dare_status+"\nFrom Amount : "+ Promo.from_date+"\nTo Date : "+ Promo.to_date);
    let date: Date = new Date();
    console.log(this.datepipe.transform(date.toTimeString(),'hh:mm'));
    if(Promo.Active_dare_status == "true"){
      if(this.datepipe.transform(date.toDateString(),'yyyy-MM-dd')>= Promo.from_date && this.datepipe.transform(date.toDateString(),'yyyy-MM-dd') <= Promo.to_date){
        this.DateCheck = true;
        this.OfferCheck = true;
      }else{
        this.DateCheck = false;
        this.OfferCheck = false;
      }
    }else if(Promo.Day_status == "true"){
      var splittedDays = Promo.Days.split(",",7);
      var day: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var TodayDay = day[date.getDay()]; 
      if(splittedDays.includes(TodayDay)){
        this.DayCheck = true;
        this.OfferCheck = true;
      }else{
        this.DayCheck = false;
        this.OfferCheck = false;
      }
    }
    if(Promo.Active_time_status == "true"){
      console.log(this.datepipe.transform(date.toTimeString(),'hh:mm'));
      this.TimeCheck = true;
    }else{
      this.TimeCheck = true;
    }
    if(Promo.minbill_status == "true"){
      if(this.total_amount >= Promo.minbill_amount){
        this.MinBillCheck = true;
      }else{
        this.MinBillCheck = false;
      }
    }else{
      this.MinBillCheck = true;
    }
    if(this.DateCheck == false || this.DayCheck == false || this.MinBillCheck == false){
      this.OfferApplyMessage = "This Offer can't apply to this Bill..!";
      this.isCheckvisible = false;
      this.isCancelvisible = true;
      this.isdetailsvisible = false;
      this.data.AmountAfterDiscount = this.total_amount;
      this.data.DiscountAmount = 0;
      this.data.OfferId = 0;
      this.data.Percentage = 0;
      this.data.MaxDiscountAmount = 0;
      this.data.MinBillAmount = 0;
      this.data.PromoCode = "";
    }else{
      this.OfferApplyMessage = "This Offer Can be Applied";
      this.isCheckvisible = true;
      this.isCancelvisible = false;
      this.isdetailsvisible = true;
      this.Percentage = Promo.percentage;
      this.Discount = (this.Percentage * this.total_amount) / 100;
      if(Promo.maximum_bill_status == "true"){
        if(this.Discount >= Promo.maximum_bill_amount){
          this.AmountAfterDiscount = this.total_amount - Promo.maximum_bill_amount;
          this.Discount = Promo.maximum_bill_amount;
        }else{
          this.AmountAfterDiscount = this.total_amount - this.Discount;
        }
      }else{
        this.AmountAfterDiscount = this.total_amount - this.Discount;
      }
      this.data.AmountAfterDiscount = this.AmountAfterDiscount;
      this.data.DiscountAmount = this.Discount;
      this.data.OfferId = Promo.offers_id;
      this.data.Percentage = Promo.percentage;
      this.data.MaxDiscountAmount = Promo.maximum_bill_amount;
      this.data.MinBillAmount = Promo.minbill_amount;
      this.data.PromoCode = Promo.promo_code;
    }
  }
  apply(){
    if(this.OfferApplyMessage == "None"){
      alert("Please Select the Offer & Click on Apply");
    }
  }
  Close(){
    this.data.AmountAfterDiscount = this.total_amount;
    this.data.DiscountAmount = 0;
    this.data.OfferId = 0;
    this.data.Percentage = 0;
    this.data.MaxDiscountAmount = 0;
    this.data.MinBillAmount = 0;
    this.data.PromoCode = "";
  }
}
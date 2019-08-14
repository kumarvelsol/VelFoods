import { Component, Inject, Optional,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { Responce, Data } from 'src/app/shared/js-response';
import { OfferUp } from 'src/app/shared/interfaces/offers';

export interface UsersData {
  table_Name:string;
  total_amount:number;
}
@Component({
  selector: 'app-offers-dialog',
  templateUrl: './offers-dialog.component.html',
  styleUrls: ['./offers-dialog.component.css']
})

export class OffersDialogComponent implements OnInit {
  table_Name : string;
  total_amount : number;
  local_data:any;
  Offers : Data[];
  offers_count : number;
  PromoCode : string;
  constructor(public dialogRef: MatDialogRef<OffersDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData, public service:RestaurantService) {
    console.log(data);
    this.local_data = data;
    this.table_Name = this.local_data.table_Name;
    this.total_amount = this.local_data.total_amount;
  }
  ngOnInit() {
    this.service.OffersList(1).subscribe((data : Responce) =>
    {
      this.offers_count = data.Data.length;
      //this.kot_id = this.count + 1;
      console.log(data);
      this.Offers = data.Data;
    });
  }
  onbuttonclick($event,promo_code){
    //this.amount = 0;
    this.PromoCode = promo_code;
    this.service.SelectedOffer(1,this.PromoCode).subscribe((data : Responce) =>
    {
      if(data.code == 200){
        if(data.Data[0].Active_dare_status == "true"){

        }else if(data.Data[0].Day_status == "true"){
          
        }
      }else{

      }
        //this.dataSource = data.Data;
        // this.listcount = data.Data.length;
        // for(let i =0;i<this.listcount;i++)
        // {
        //   this.totalamount = data.Data[i].order_totalamount;
        //   this.amount = this.amount + this.totalamount;
        // }
    });
  }
}

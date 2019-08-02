import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { JsResponse } from 'src/app/shared/JsResponse';
import { Data } from 'src/app/shared/data';
import { Paidouts } from 'src/app/shared/paidouts';

@Component({
  selector: 'app-paidoutsmiscol',
  templateUrl: './paidoutsmiscol.component.html',
  styleUrls: ['./paidoutsmiscol.component.css']
})
export class PaidoutsmiscolComponent implements OnInit {
  rpaid : string; rmis : string; paidout_id : number;  paidout_name : string;
  paidout_pariticular : string;  paidout_reportingname : string;
  restaurent_id : number;  transaction_id : string; am =[];
  type_of_payment : string;  Amoount : number; jsRes : JsResponse; paiddata : Data[];
  bank_name : string;total_amount :number;Amount =[];total : number; paytypee : string;
  paytype = []; amount = []; tr = []; // paytypee = false;   
  checked: boolean = false;
  checked1: boolean = false;checked2: boolean = false;checked3: boolean = false;checked4: boolean = false;
  constructor(public service1 : RestaurantService) {
   }

  ngOnInit() {
    for (let i = 0; i < 5; i++) 
      {
        this.am[i] = 0;
      }

  }
  public onChange(event: number)
  {
    console.log(this.am);
    this.total_amount = 0;
      for (let i = 0; i < 5; i++) 
      {
      this.total_amount+= +this.am[i];
      this.Amount[i] = this.total_amount;
      this.total = this.Amount[i];
      }
      this.total_amount = this.total;
      console.log(this.total_amount);
}
  public onsubmitclick()
  {
    let a : Paidouts = {
    paidout_name : this.paidout_name,
    paidout_pariticular : this.paidout_pariticular,
    paidout_reportingname : this.paidout_reportingname,
    restaurent_id : 1,
    transaction_id : this.transaction_id,
    type_of_payment : this.paytypee,
    Amoount : this.total_amount,
    bank_name : this.bank_name
    } 
    this.service1.createpaidouts(a).subscribe((data : JsResponse) => 
    {
      this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Paidouts Added Succesfully.!");
            }else{ alert("Failed to Insert data");}
       });

       console.log(this.type_of_payment);
  }
  toggleVisibility(value){
    this.checked = !value;
    if(this.checked == true)
    { this.type_of_payment = "Cash";}
    else {this.type_of_payment = ""; }
    console.log(this.checked);console.log(this.type_of_payment);
  }
  toggleVisibility1(value){
    this.checked1 = !value;
    if(this.checked1 == true)
    { this.type_of_payment = "Card";}
    else { this.type_of_payment = "";}
    console.log(this.checked1);console.log(this.type_of_payment);
  }
  toggleVisibility2(value){
    this.checked2 = !value;
    if(this.checked2 == true)
    { this.type_of_payment = "Online";}
    else {this.type_of_payment = ""; }
    console.log(this.checked2);console.log(this.type_of_payment);
  }
  toggleVisibility3(value){
    this.checked3 = !value;
    if(this.checked3 == true)
    { this.type_of_payment = "Wallet";}
    else {this.type_of_payment = ""; }
    console.log(this.checked3);console.log(this.type_of_payment);
  }
  toggleVisibility4(value){
    this.checked4 = !value;
    if(this.checked4 == true)
    { this.type_of_payment = "Cheque";}
    else {this.type_of_payment = ""; }
    console.log(this.checked4);console.log(this.type_of_payment);
  }
}
 
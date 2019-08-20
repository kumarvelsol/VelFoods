import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Responce, JsResponse } from '../../shared/js-response';
import { Router, ActivatedRoute } from '@angular/router';
import { Billpayment } from 'src/app/shared/billpayment';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.css']
})
export class BillpaymentComponent implements OnInit {
  am =[];tr =[];bank_name : string; total_amount : number;transaction_id :string;
  bank : string;bank1 : string;bank2 : string;bank3 : string;type_of_payment : string;  Amoount : number;
  checked: boolean = false;checked1: boolean = false;checked2: boolean = false;checked3: boolean = false;checked4: boolean = false;
  checking1:boolean=false;checking2:boolean=false;checking3:boolean=false;checking4:boolean=false;checking5:boolean=false;
  banklist;walletlist;count : number = 0; tablelist : Responce;billment_id : number;
  table_name : number; table_pax : number; amount : number;bill_amount :number; due_amount : number;
  print_id : number;payment_status : string;table_defination_id : number;jsRes : JsResponse; 

  constructor(public service1 : RestaurantService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.table_name = params["tablename"];
      this.table_pax = params["pax"];
      this.amount = params["amount"];
      this.table_defination_id =params["tid"];
    });
    console.log(this.table_name);console.log(this.table_defination_id);
   }

  ngOnInit() 
  {
    for (let i = 0; i < 5; i++) 
      {
        this.am[i] = 0;
      }
      this.service1.getbanks(1).subscribe(data =>
        {
          this.banklist = data.Data;
        });
        this.service1.getwallets(1).subscribe(data =>
          {
            this.walletlist = data.Data;
          });
          this.service1.Getbillpayemnts(1).subscribe((data : Responce) =>
          {
            this.count = data.Data.length;
            this.billment_id = this.count + 1;
            console.log(data);
          });
          this.service1.getprintid(1,this.table_defination_id,"printed").subscribe((data: Responce) =>
            {
              this.print_id = data.Data[0].print_id;
            });
  }
  public onChange(event : number)
  {
    this.bank_name = "";
    this.total_amount = this.am[0];
    this.bill_amount = this.am[0];
    this.due_amount = this.amount - this.bill_amount;
    if(this.due_amount == 0)
    {
      this.payment_status = "Settled";
    }
  }
  public onChange1(event : number)
  {
    this.bank_name = this.bank;
    this.total_amount = this.am[1];
    this.bill_amount = this.am[1];
    this.due_amount = this.amount - this.bill_amount;
    if(this.due_amount == 0)
    {
      this.payment_status = "Settled";
    }
  }
  public onChange2(event : number)
  {
    this.bank_name = this.bank1;
    this.total_amount = this.am[2];
    this.bill_amount = this.am[2];
    this.due_amount = this.amount - this.bill_amount;
    if(this.due_amount == 0)
    {
      this.payment_status = "Settled";
    }
  }
  public onChange3(event : number)
  {
    this.bank_name = this.bank2;
    this.total_amount = this.am[3];
    this.bill_amount = this.am[3];
    this.due_amount = this.amount - this.bill_amount;
    if(this.due_amount == 0)
    {
      this.payment_status = "Settled";
    }
  }
  public onChange4(event : number)
  {
    this.bank_name = this.bank3;
    this.total_amount = this.am[4];
    this.bill_amount = this.am[4];
    this.due_amount = this.amount - this.bill_amount;
    if(this.due_amount == 0)
    {
      this.payment_status = "Settled";
    }
  }
  public onBillChange($event)
  {
    this.due_amount = this.amount - this.bill_amount;
  }

  toggleVisibility(value){
    this.checked = !value;
    if(this.checked == true)
    {
      this.checking2 = true;this.checking1 = false;this.checking3 = true;
      this.checking4 = true;this.checking5 = true; 
    }
    else
    {
      this.checking2 = false;this.checking1 = false;this.checking3 = false;
      this.checking4 = false;this.checking5 = false;
    }
    if(this.checked == true)
    { 
      this.type_of_payment = "Cash"; this.Amoount = this.am[0];
    this.am[1] = 0;this.am[2] = 0;this.am[3] = 0;this.am[4] = 0;
    this.tr[0] = ""; this.tr[1] = "";this.tr[2] = "";this.tr[3] = "";
    this.bank = ""; this.bank1 = "";this.bank2 ="";this.bank3 ="";
    }
    else {this.type_of_payment = ""; this.Amoount = null;
    }
    console.log(this.checked);console.log(this.type_of_payment);
  }
  toggleVisibility1(value){
    this.checked1 = !value;
    if(this.checked1 == true)
    {
      this.checking2 = false;this.checking1 = true;this.checking3 = true;
      this.checking4 = true;this.checking5 = true;
    }
    else
    {
      this.checking2 = false;this.checking1 = false;this.checking3 = false;
      this.checking4 = false;this.checking5 = false;
    }
    if(this.checked1 == true)
    { 
      this.type_of_payment = "Card";this.Amoount = this.am[1];
      this.am[0] = 0;this.am[2]= 0;this.am[3]= 0;this.am[4]= 0;
      this.transaction_id = this.tr[0]; this.tr[1] = "";this.tr[2] = "";this.tr[3] = "";
      this.bank_name = this.bank; this.bank1 = "";this.bank2 ="";this.bank3 ="";
    }
    else { this.type_of_payment = "";this.Amoount = null;}
    console.log(this.checked1);console.log(this.type_of_payment);
  }
  toggleVisibility2(value){
    this.checked2 = !value;
    if(this.checked2 == true)
    {
      this.checking2 = true;this.checking1 = true;this.checking3 = false;
      this.checking4 = true;this.checking5 = true;
    }
    else
    {
      this.checking2 = false;this.checking1 = false;this.checking3 = false;
      this.checking4 = false;this.checking5 = false;
    }
    if(this.checked2 == true)
    { 
      this.type_of_payment = "Online";this.Amoount = this.am[2];
      this.am[0]= 0;this.am[1]= 0;this.am[3]= 0;this.am[4]= 0;
      this.transaction_id = this.tr[1]; this.tr[0] = "";this.tr[2] = "";this.tr[3] = "";
      this.bank_name = this.bank1; this.bank = "";this.bank2 ="";this.bank3 ="";
    }
    else {this.type_of_payment = ""; this.Amoount = null;}
    console.log(this.checked2);console.log(this.type_of_payment);
  }
  toggleVisibility3(value){
    this.checked3 = !value;
    if(this.checked3 == true)
    {
      this.checking2 = true;this.checking1 = true;this.checking3 = true;
      this.checking4 = false;this.checking5 = true;
    }
    else
    {
      this.checking2 = false;this.checking1 = false;this.checking3 = false;
      this.checking4 = false;this.checking5 = false;
    }
    if(this.checked3 == true)
    { 
      this.type_of_payment = "Wallet";this.Amoount = this.am[3];
      this.am[0]= 0;this.am[1]= 0;this.am[2]= 0;this.am[4]= 0;
      this.transaction_id = this.tr[2]; this.tr[1] = "";this.tr[0] = "";this.tr[3] = "";
      this.bank_name = this.bank2; this.bank1 = "";this.bank ="";this.bank3 ="";
    }
    else {this.type_of_payment = ""; this.Amoount = null;}
    console.log(this.checked3);console.log(this.type_of_payment);
  }
  toggleVisibility4(value){
    this.checked4 = !value;
    if(this.checked4 == true)
    {
      this.checking2 = true;this.checking1 = true;this.checking3 = true;
      this.checking4 = true;this.checking5 = false;
    }
    else
    {
      this.checking2 = false;this.checking1 = false;this.checking3 = false;
      this.checking4 = false;this.checking5 = false;
    }
    if(this.checked4 == true)
    { 
      this.type_of_payment = "Cheque";this.Amoount = this.am[4];
      this.am[0]= 0;this.am[1]= 0;this.am[2]= 0;this.am[3]= 0;
      this.transaction_id = this.tr[3]; this.tr[1] = "";this.tr[2] = "";this.tr[0] = "";
      this.bank_name = this.bank3; this.bank1 = "";this.bank2 ="";this.bank ="";
    }
    else {this.type_of_payment = "";this.Amoount = null; }
    console.log(this.checked4);console.log(this.type_of_payment);
  }
  public onsubmitclick()
  {
    let a : Billpayment = {
      billment_id : this.billment_id,
      table_name : this.table_name,
      table_pax : this.table_pax,
      amount : this.amount,
      bill_amount :this.bill_amount, 
      due_amount : this.due_amount,
      bank_name : this.bank_name,
      transaction_id :this.transaction_id,
      print_id : this.print_id,
      payment_mode : this.type_of_payment,
      payment_status : this.payment_status,
      table_defination_id : this.table_defination_id,
      restaurent_id : 1
    }
    this.service1.billinsert(a).subscribe((data : JsResponse) =>
    {
      this.jsRes = data;
      if(this.jsRes.code==200)
          {
            alert("BillPayment Added Succesfully.!");
          }else{ alert("Failed to Insert data");}
   });
  }
}

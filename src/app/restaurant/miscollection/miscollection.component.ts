import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { JsResponse } from 'src/app/shared/JsResponse';
import { Miscollection } from 'src/app/shared/miscollection';

@Component({
  selector: 'app-miscollection',
  templateUrl: './miscollection.component.html',
  styleUrls: ['./miscollection.component.css']
})
export class MiscollectionComponent implements OnInit {
  miscollection_name : string;  miscollection_pariticular : string;
  miscollection_reportingname : string;  restaurent_id : number;
  transaction_id : string; am =[];
  type_of_payment : string;  Amoount : number; jsRes : JsResponse; 
  bank_name : string;total_amount :number;Amount =[];total : number; paytypee : string;
  paytype = []; amount = []; tr = []; checked: boolean = false;bank : string;bank1 : string;bank2 : string;bank3 : string;
  checked1: boolean = false;checked2: boolean = false;checked3: boolean = false;checked4: boolean = false;
  checking1:boolean=false;checking2:boolean=false;checking3:boolean=false;checking4:boolean=false;checking5:boolean=false;
  constructor(public service1 : RestaurantService) { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) 
      {
        this.am[i] = 0;
      }
  }
//   public onChange(event: number)
//   {
//     console.log(this.am);
//     this.total_amount = 0;
//       for (let i = 0; i < 5; i++) 
//       {
//       this.total_amount+= +this.am[i];
//       this.Amount[i] = this.total_amount;
//       this.total = this.Amount[i];
//       }
//       this.total_amount = this.total;
//       console.log(this.total_amount);
// }
  public onsubmitclick()
  {
    let a : Miscollection = {
      miscollection_name : this.miscollection_name,
      miscollection_pariticular : this.miscollection_pariticular,
      miscollection_reportingname : this.miscollection_reportingname,
      restaurent_id : 1,
      transaction_id : this.transaction_id,
      type_of_payment : this.type_of_payment,
      Amoount : this.Amoount,
      bank_name : this.bank_name
    } 
    this.service1.createmiscollection(a).subscribe((data : JsResponse) => 
    {
      this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Miscollection Added Succesfully.!");
            }else{ alert("Failed to Insert data");}
       });
  }

  public onChange(event : number)
{
  this.bank_name = "";
  this.total_amount = this.am[0];
}
public onChange1(event : number)
{
  this.bank_name = this.bank;
  this.total_amount = this.am[1];
}
public onChange2(event : number)
{
  this.bank_name = this.bank1;
  this.total_amount = this.am[2];
}
public onChange3(event : number)
{
  this.bank_name = this.bank2;
  this.total_amount = this.am[3];
}
public onChange4(event : number)
{
  this.bank_name = this.bank3;
  this.total_amount = this.am[4];
}

toggleVisibility(value){
  this.checked = !value;
  if(this.checked == true)
  {
    this.checking2 = true;this.checking1 = false;this.checking3 = true;
    this.checking4 = true;this.checking4 = true;this.checking5 = true;
  }
  else
  {
    this.checking2 = false;this.checking1 = false;this.checking3 = false;
    this.checking4 = false;this.checking4 = false;this.checking5 = false;
  }
  if(this.checked == true)
  { this.type_of_payment = "Cash"; this.Amoount = this.am[0];} //this.bank_name = "a";this.transaction_id = "0";}
  else {this.type_of_payment = ""; this.Amoount = null;}
  console.log(this.checked);console.log(this.type_of_payment);
}
toggleVisibility1(value){
  this.checked1 = !value;
  if(this.checked1 == true)
  {
    this.checking2 = false;this.checking1 = true;this.checking3 = true;
    this.checking4 = true;this.checking4 = true;this.checking5 = true;
  }
  else
  {
    this.checking2 = false;this.checking1 = false;this.checking3 = false;
    this.checking4 = false;this.checking4 = false;this.checking5 = false;
  }
  if(this.checked1 == true)
  { this.type_of_payment = "Card";this.Amoount = this.am[1];}
  else { this.type_of_payment = "";this.Amoount = null;}
  console.log(this.checked1);console.log(this.type_of_payment);
}
toggleVisibility2(value){
  this.checked2 = !value;
  if(this.checked2 == true)
  {
    this.checking2 = true;this.checking1 = true;this.checking3 = false;
    this.checking4 = true;this.checking4 = true;this.checking5 = true;
  }
  else
  {
    this.checking2 = false;this.checking1 = false;this.checking3 = false;
    this.checking4 = false;this.checking4 = false;this.checking5 = false;
  }
  if(this.checked2 == true)
  { this.type_of_payment = "Online";this.Amoount = this.am[2];}
  else {this.type_of_payment = ""; this.Amoount = null;}
  console.log(this.checked2);console.log(this.type_of_payment);
}
toggleVisibility3(value){
  this.checked3 = !value;
  if(this.checked3 == true)
  {
    this.checking2 = true;this.checking1 = true;this.checking3 = true;
    this.checking4 = false;this.checking4 = true;this.checking5 = true;
  }
  else
  {
    this.checking2 = false;this.checking1 = false;this.checking3 = false;
    this.checking4 = false;this.checking4 = false;this.checking5 = false;
  }
  if(this.checked3 == true)
  { this.type_of_payment = "Wallet";this.Amoount = this.am[3];}
  else {this.type_of_payment = ""; this.Amoount = null;}
  console.log(this.checked3);console.log(this.type_of_payment);
}
toggleVisibility4(value){
  this.checked4 = !value;
  if(this.checked4 == true)
  {
    this.checking2 = true;this.checking1 = true;this.checking3 = true;
    this.checking4 = true;this.checking4 = true;this.checking5 = false;
  } 
  else
  {
    this.checking2 = false;this.checking1 = false;this.checking3 = false;
    this.checking4 = false;this.checking4 = false;this.checking5 = false;
  }
  if(this.checked4 == true)
  { this.type_of_payment = "Cheque";this.Amoount = this.am[4];}
  else {this.type_of_payment = "";this.Amoount = null; }
  console.log(this.checked4);console.log(this.type_of_payment);
}
  // toggleVisibilityy(value){
  //   this.checked = !value;
  //  // this.paytype[1] = e.target.checked;this.paytypee = this.paytype[1];
  //   console.log(this.paytypee);
  // }
  // toggleVisibilitty(value){
  //   this.checked = !value;
  //  // this.paytype[2] = e.target.checked;this.paytypee = this.paytype[2];
  //   console.log(this.paytypee);
  // }
  // toggleVisibiliity(value){
  //   this.checked = !value;
  //  // this.paytype[3] = e.target.checked;this.paytypee = this.paytype[3];
  //   console.log(this.paytypee);
  // }
}

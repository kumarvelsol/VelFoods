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
  restaurent_id : number;  transaction_id : string;
  type_of_payment : string;  Amoount : number; jsRes : JsResponse; paiddata : Data[];
  bank_name : string
  constructor(public service1 : RestaurantService) { }

  ngOnInit() {

  }
  public onsubmitclick()
  {
    let a : Paidouts = {
    paidout_name : this.paidout_name,
    paidout_pariticular : this.paidout_pariticular,
    paidout_reportingname : this.paidout_reportingname,
    restaurent_id : 1,
    transaction_id : this.transaction_id,
    type_of_payment : this.type_of_payment,
    Amoount : this.Amoount,
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
  }
}
 
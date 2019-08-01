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
  paytype = []; amount = []; tr = []; // paytypee = false;   
  constructor(public service1 : RestaurantService) { }

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
  toggleVisibility(e){
    this.paytype[0] = e.target.checked;this.paytypee = this.paytype[0];
    console.log(this.paytypee);
  }
  toggleVisibilityy(e){
    debugger;
    this.paytype[1] = e.target.checked;this.paytypee = this.paytype[1];
    console.log(this.paytypee);
  }
  toggleVisibilitty(e){
    this.paytype[2] = e.target.checked;this.paytypee = this.paytype[2];
    console.log(this.paytypee);
  }
  toggleVisibiliity(e){
    this.paytype[3] = e.target.checked;this.paytypee = this.paytype[3];
    console.log(this.paytypee);
  }
}

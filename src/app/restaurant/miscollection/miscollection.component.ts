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
  transaction_id : string;  type_of_payment : string;
  Amoount : number; jsRes : JsResponse;
  bank_name : string;
  constructor(public service1 : RestaurantService) { }

  ngOnInit() {
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

}

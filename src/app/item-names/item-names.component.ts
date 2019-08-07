import { Component, OnInit } from '@angular/core';
import { ItemcategoryServiceService } from '../itemcategory-service.service';
import { NgForm } from '@angular/forms';
import { RestaurantService } from '../restaurant/restaurant.service';
import { itemnames } from '../shared/interfaces/empcate';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-item-names',
  templateUrl: './item-names.component.html',
  styleUrls: ['./item-names.component.css']
})
export class ItemNamesComponent implements OnInit 
{
    itemname_id:number;
    itemname_item_name:string;
    itemname_description:string;
    itemname_reportingname:string;
    itemname_active_from:Date;
    itemname_status:string;
    item_dinein_amount:number;
    item_dinein_tax:number;
    item_takeaway_amount:number;
    item_takeaway_tax:number;
    item_homedelivary_amount:number;
    item_homedelivary_tax:number;
    item_homedelivery_deliverycharges:number;
    restaurent_id :number;
    itemcategory_id:number;
    itemname_dinein_total:string;
    itemname_takeaway_total:string;
    itemname_homedelivary_total:string;
    dataSource;
    buttoncontent:string;
    constructor(public service:RestaurantService) { }

  displayedColumns: string[] = ['itemname_id', 'itemname_item_name', 'itemname_reportingname','item_dinein_amount','item_dinein_tax','item_takeaway_amount','item_takeaway_tax','item_homedelivary_amount','item_homedelivary_tax','item_homedelivery_deliverycharges', 'itemname_status','actions'];
  
  ngOnInit() 
  {
    this.buttoncontent ="Save";
    this.service.getitemnames(1).subscribe(data =>
      {
        this.dataSource = data.Data;
      });
  }
  onsaveclick(){
    let itmname: itemnames ={
      itemname_id:this.itemname_id,
      itemname_item_name:this.itemname_item_name,
      itemname_description:this.itemname_description,
      itemname_reportingname:this.itemname_reportingname,
      itemname_active_from:this.itemname_active_from,
      itemname_status:this.itemname_status,
      item_dinein_amount:this.item_dinein_amount,
      item_dinein_tax:this.item_dinein_tax,
      item_takeaway_amount:this.item_takeaway_amount,
      item_takeaway_tax:this.item_takeaway_tax,
      item_homedelivary_amount:this.item_homedelivary_amount,
      item_homedelivary_tax:this.item_homedelivary_tax,
      item_homedelivery_deliverycharges:this.item_homedelivery_deliverycharges,
      restaurent_id:1,
      itemcategory_id:1,
      itemname_dinein_total:this.itemname_dinein_total,
      itemname_takeaway_total:this.itemname_takeaway_total,
      itemname_homedelivary_total:this.itemname_homedelivary_total
    }
    if(this.buttoncontent =="Save")
    {
      this.service.additemname(itmname).subscribe(data =>{
        if(data.code ==200){
          alert(data.message);
          this.ngOnInit();
          this.onclearclick();
        }
        else
        {
          alert(data.message);
          this.ngOnInit();
          this.onclearclick();
        }
      });
    }    
    else
    {
      this.service.updateitemname(itmname).subscribe(data =>{
        if(data.code ==200){
          alert(data.message);
          this.ngOnInit();
          this.onclearclick();
        }
        else
        {
          alert(data.message);
          this.ngOnInit();
          this.onclearclick();
        }
      });
    }
  }
  onclearclick()
  {
    this.itemname_id=Number("");
    this.itemname_item_name="";
    this.itemname_description="";
    this.itemname_reportingname="";
    this.itemname_status="";
    this.item_dinein_amount=Number("");
    this.item_dinein_tax=Number("");
    this.item_takeaway_amount=Number("");
    this.item_takeaway_tax=Number("");
    this.item_homedelivary_amount=Number("");
    this.item_homedelivary_tax=Number("");
    this.item_homedelivery_deliverycharges=Number("");
    this.restaurent_id =Number("");
    this.itemcategory_id=Number("");
    this.itemname_dinein_total="";
    this.itemname_takeaway_total="";
    this.itemname_homedelivary_total="";
    this.buttoncontent ="Save";
  }
  totalamountdine:number;
  num1:number;
  num2:number;
  onchange(){
    this.num1 =this.item_dinein_amount;
    this.num2 = (this.item_dinein_amount + this.item_dinein_tax)/100
    this.totalamountdine = this.num1 +this.num2;
  }

  public RowSelected(i:number,
    itemname_id:number,
    itemname_item_name:string,itemname_description:string,itemname_reportingname:string,itemname_active_from:Date,
    item_dinein_amount:number,item_dinein_tax:number,itemname_dinein_total:string,
    item_takeaway_amount:number,item_takeaway_tax:number,itemname_takeaway_total:string,
    item_homedelivary_amount:number,item_homedelivary_tax:number,
    item_homedelivery_deliverycharges:number,itemname_homedelivary_total:string,
    itemname_status:string)
  {
    this.buttoncontent ="Update";
    this.itemname_id = itemname_id;
    this.itemname_item_name =itemname_item_name;
    this.itemname_description =itemname_description;
    this.itemname_reportingname =itemname_reportingname;
    this.itemname_active_from =itemname_active_from;
    this.item_dinein_amount =item_dinein_amount;
    this.item_dinein_tax =item_dinein_tax;
    this.itemname_dinein_total =itemname_dinein_total;
    this.item_takeaway_amount =item_takeaway_amount;
    this.item_takeaway_tax =item_takeaway_tax;
    this.itemname_takeaway_total =itemname_takeaway_total;
    this.item_homedelivary_amount =item_homedelivary_amount;
    this.item_homedelivary_tax  =item_homedelivary_tax;
    this.item_homedelivery_deliverycharges =item_homedelivery_deliverycharges;
    this.itemname_homedelivary_total =itemname_homedelivary_total;
    this.itemname_status =itemname_status;
  }
}


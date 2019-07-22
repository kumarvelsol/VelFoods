import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { JsResponse } from 'src/app/shared/JsResponse';
import { Tablebooking } from 'src/app/shared/tablebooking';


export interface Restaurant {
  id: string;
  rname: string;
};
@Component({
  selector: 'app-tablereserve',
  templateUrl: './tablereserve.component.html',
  styleUrls: ['./tablereserve.component.css']
})



export class TablereserveComponent implements OnInit {
  res: Restaurant[] = [
    {id: '1', rname: 'BBQ'},
    {id: '2', rname: 'Daspalla'}
  ];

  rows: Array<{id:string,date:string,time:string,name:string,pax:string,phoneno:number,restaurant:string}> = [];
  displayedColumns: string[] = ["table_booking_id","tablebooking_date", "tablebooking_time","tablebookingf_name", "tablebooking_pax","tablebooking_mobile_no","restaurant","actions"];
  buttoncontent : string;abDatasource;id:string; tabledatalist : Apiresponse; tabledata : Data[]; jsRes :JsResponse;
  table_booking_id : number;    tablebookingf_name : string;
    tablebooking_pax : number;    tablebooking_mobile_no : number;
    tablebooking_advance : number;    tablebooking_time : string;
    tablebooking_splinstructions : string;    restaurent_id : number; tablebooking_date : string;
  constructor(private router: Router,public service1 : RestaurantService) { }
  
  ngOnInit() {
  this.buttoncontent = "Save";
  this.service1.gettablebooking(1).subscribe((data:Apiresponse)=> {
    this.tabledatalist = data;
    this.abDatasource = new MatTableDataSource(this.tabledatalist.Data);
  });
}
  public onsubmitclick() 
  {
    if(this.tablebookingf_name == "" || this.tablebooking_pax == null || this.tablebooking_mobile_no == null)
    {
      alert("Please fill all fields");
    }
    else if(this.buttoncontent == "Save")
    {
       let a : Tablebooking = {
        table_booking_id : this.table_booking_id,
        tablebooking_advance : this.tablebooking_advance,
        tablebooking_date : this.tablebooking_date,
        tablebooking_mobile_no : this.tablebooking_mobile_no,
        tablebooking_pax : this.tablebooking_pax,
        tablebooking_splinstructions : this.tablebooking_splinstructions,
        tablebooking_time : this.tablebooking_time,
        tablebookingf_name : this.tablebookingf_name,
        restaurent_id : 1,
       }
      this.service1.createtablebooking(a).subscribe((data : JsResponse) => {

        this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Table Added Succesfully.!");
            }else{ alert("Failed to Insert data");}
       });
    }
    else if(this.buttoncontent == "Update")
    {
      let a : Tablebooking = {
        table_booking_id : this.table_booking_id,
        tablebooking_advance : this.tablebooking_advance,
        tablebooking_date : this.tablebooking_date,
        tablebooking_mobile_no : this.tablebooking_mobile_no,
        tablebooking_pax : this.tablebooking_pax,
        tablebooking_splinstructions : this.tablebooking_splinstructions,
        tablebooking_time : this.tablebooking_time,
        tablebookingf_name : this.tablebookingf_name,
        restaurent_id : 1,
       }
      this.service1.updatetablebooking(a).subscribe((data : JsResponse) => {

        this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Table updated Succesfully.!");
            }else{ alert("Failed to update data");}
       });
    }
  }
  public RowSelected(j,date:string,time:string,name:string,pax:number,restaurant:number,phoneno:number,advance:number)
  {
    this.buttoncontent = "Update";
    this.tablebooking_date = date;
    this.tablebooking_time = time;
    this.tablebookingf_name = name;
    this.tablebooking_pax = pax;
    this.restaurent_id = restaurant;
    this.tablebooking_mobile_no = phoneno;
    this.tablebooking_advance = advance;
  }
  public NavigateClick(j,date:string,time:string,name:string,pax:number,restaurant:number,phoneno:number,advance:number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "date":this.tablebooking_date = date, 
        "time":this.tablebooking_time = time,
        "name":this.tablebookingf_name= name,
        "pax":this.tablebooking_pax = pax,
        "restaurant":this.restaurent_id = restaurant,
        "phoneno":this.tablebooking_mobile_no = phoneno,
        "advance":this.tablebooking_advance = advance,
      }
    };
    this.router.navigate(['/ordering'],navigationExtras); 
  }
}

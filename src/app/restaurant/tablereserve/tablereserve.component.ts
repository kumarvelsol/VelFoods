import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { JsResponse } from '../../shared/js-response';
import { Tablebooking } from 'src/app/shared/tablebooking';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { LoginComponent } from 'src/app/login/login.component';

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
  restaurents:Data[];
  rows: Array<{id:string,date:string,time:string,name:string,pax:string,phoneno:number,restaurant:string}> = [];
  displayedColumns: string[] = ["table_booking_id","tablebookingf_name","tablebooking_pax","tablebooking_date", "tablebooking_time", "tablebooking_mobile_no","restaurent_id","actions"];
  buttoncontent : string;abDatasource;id:string; tabledatalist : Apiresponse; tabledata : Data[]; jsRes :JsResponse;
  table_booking_id : number;    tablebookingf_name : string;
    tablebooking_pax : number;    tablebooking_mobile_no : number;
    tablebooking_advance : number;    tablebooking_time : string;
    tablebooking_splinstructions : string;    restaurent_id : number; tablebooking_date : string;
  constructor(private router: Router,public service1 : RestaurantService,private atp: AmazingTimePickerService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
   }
  opentime() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
    console.log(time);
    this.tablebooking_time = time;
    });
  }
  ngOnInit() {
  this.buttoncontent = "Save";
  this.service1.getrestaurent(this.restaurent_id).subscribe((data:Apiresponse) =>{
    this.restaurents = data.Data;
  });
  this.gettablelist();
}
  gettablelist()
  {
    this.service1.gettablebooking(this.restaurent_id).subscribe((data:Apiresponse)=> {
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
        restaurent_id : this.restaurent_id, 
       }
      this.service1.createtablebooking(a).subscribe((data : JsResponse) => {

        this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Table Added Succesfully.!");
              this.onclearclick();
            }else{ alert("Failed to Insert data");}
       });
    }
    else if(this.buttoncontent == "Update")
    {
      let a : Tablebooking = {
        table_booking_id : this.table_booking_id,
        tablebookingf_name : this.tablebookingf_name,
        tablebooking_pax : this.tablebooking_pax,
        tablebooking_advance : this.tablebooking_advance,
        tablebooking_date : this.tablebooking_date,
        tablebooking_time : this.tablebooking_time,
        tablebooking_mobile_no : this.tablebooking_mobile_no,
        tablebooking_splinstructions : this.tablebooking_splinstructions,
        restaurent_id : this.restaurent_id,
       }
      this.service1.updatetablebooking(a).subscribe((data : JsResponse) => {

        this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Table updated Succesfully.!");
              this.onclearclick();
            }else{ alert("Failed to update data");}
       });
    }
  }
 
  public RowSelected(j,table_booking_id:number,tablebooking_date:string,tablebooking_time:string,tablebookingf_name:string,tablebooking_pax:number,restaurent_id:number,tablebooking_mobile_no:number,tablebooking_advance:number,tablebooking_splinstructions:string)
  {
    this.buttoncontent = "Update";
    this.restaurent_id = restaurent_id;
    this.table_booking_id = table_booking_id;
    this.tablebookingf_name = tablebookingf_name;
    this.tablebooking_pax = tablebooking_pax;
    this.tablebooking_date = tablebooking_date;
    this.tablebooking_time = tablebooking_time;
    this.tablebooking_mobile_no = tablebooking_mobile_no;
    this.tablebooking_advance = tablebooking_advance;
    this.tablebooking_splinstructions = tablebooking_splinstructions;
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
    this.router.navigate(['/Home'],navigationExtras); 
  }
  public onclearclick()
  {
    this.buttoncontent = "Save";
    this.tablebooking_date = "";
    this.tablebooking_time = "";
    this.tablebookingf_name = "";
    this.tablebooking_pax = null;
    this.restaurent_id = null;
    this.tablebooking_mobile_no = null;
    this.tablebooking_advance = null;
    this.tablebooking_splinstructions = "";
    this.gettablelist();
  }
}

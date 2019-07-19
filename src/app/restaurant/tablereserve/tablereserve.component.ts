import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';


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
  displayedColumns: string[] = ["id","date", "time","name", "pax","phoneno","restaurant","actions"];
  buttoncontent : string;abDatasource;id:string;
  table_booking_id : number;    tablebookingf_name : string;
    tablebooking_pax : number;    tablebooking_mobile_no : number;
    tablebooking_advance : number;    tablebooking_time : string;
    tablebooking_splinstructions : string;    restaurent_id : number; tablebooking_date : string;
  constructor(private router: Router,public service1 : RestaurantService) { }
  
  ngOnInit() {
  this.buttoncontent = "Save";
  }
  public onsubmitclick() 
  {
    if(this.tablebookingf_name == "" || this.tablebooking_pax == null || this.tablebooking_mobile_no == null)
    {
      alert("Please fill all fields");
    }
    else if(this.buttoncontent == "Save")
    {
      
    }
    else if(this.buttoncontent == "Update")
    {

    }
  }
  public RowSelected(j,date:string,time:string,name:string,pax:string,restaurant:string,phoneno:number,advance:number)
  {
    
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

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


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
  date : string;time : string;name :string;pax:string;phoneno :number;restaurant : string;advance:number;splins:string;
  constructor(private router: Router,) { }
  
  ngOnInit() {
  this.buttoncontent = "Save";
  this.rows = [{id:"1",date :"21/06/2019",time:"12:00 PM",name:"ani",pax :"4",phoneno :9494963284,restaurant :"BBQ"},{id:"2",date :"22/06/2019",time:"11:00 PM",name:"anisha",pax :"6",phoneno :9494963284,restaurant :"Daspalla"}];
    this.abDatasource = this.rows;
  }
  public onsubmitclick() 
  {
    if(this.name == "" || this.pax == "" || this.phoneno == null)
    {
      alert("Please fill all fields");
    }
    else if(this.buttoncontent == "Save")
    {
      this.rows.push({id : "3",date:this.date,time:this.time,name:this.name,pax:this.pax,phoneno:this.phoneno,restaurant:this.restaurant});
      this.abDatasource = this.rows;
      console.log(this.abDatasource);
    }
    else if(this.buttoncontent == "Update")
    {

    }
  }
  public RowSelected(j,date:string,time:string,name:string,pax:string,restaurant:string,phoneno:number,advance:number)
  {
    this.buttoncontent = "Update";
    this.date = date;
    this.time = time;
    this.name= name;
    this.pax = pax;
    this.restaurant = restaurant;
    this.phoneno = phoneno;
    this.advance = advance;
  }
  public NavigateClick(j,date:string,time:string,name:string,pax:string,restaurant:string,phoneno:number,advance:number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "date":this.date = date,
        "time":this.time = time,
        "name":this.name= name,
        "pax":this.pax = pax,
        "restaurant":this.restaurant = restaurant,
        "phoneno":this.phoneno = phoneno,
        "advance":this.advance = advance,
      }
    };
    this.router.navigate(['/ordering'],navigationExtras); 
  }

}

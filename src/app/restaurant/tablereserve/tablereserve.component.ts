import { Component, OnInit } from '@angular/core';


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

  rows: Array<{date:string,time:string,name:string,pax:string,phoneno:number,restaurant:string}> = [];
  displayedColumns: string[] = ["date", "time","name", "pax","phoneno","restaurant","actions"];
  buttoncontent : string;abDatasource;
  date : string;time : string;name :string;pax:string;phoneno :number;restaurant : string;advance:number;
  constructor() { }
  
  ngOnInit() {
  this.buttoncontent = "Save";
  this.rows = [{date :"21/06/2019",time:"12:00 PM",name:"ani",pax :"4",phoneno :9494963284,restaurant :"BBQ"},{date :"22/06/2019",time:"11:00 PM",name:"anisha",pax :"6",phoneno :9494963284,restaurant :"Daspalla"}];
    this.abDatasource = this.rows;
  }
  public onsubmitclick()
  {
    if(this.buttoncontent == "Save")
    {
      this.rows.push({date:this.date,time:this.time,name:this.name,pax:this.pax,phoneno:this.phoneno,restaurant:this.restaurant});
      this.abDatasource = this.rows;
      console.log(this.abDatasource);
    }
    else if(this.buttoncontent == "Update")
    {

    }
  }

}

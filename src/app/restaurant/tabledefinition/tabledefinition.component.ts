import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { JsResponse } from '../../shared/js-response';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { Tabledefinition } from 'src/app/shared/tabledefinition';

export interface Captain {
  cid: string;
  cname: string;
};
export interface Steward {
  sid: string;
  sname: string;
};
export interface Status {
  stid: string;
  stname: string;
};
@Component({
  selector: 'app-tabledefinition',
  templateUrl: './tabledefinition.component.html',
  styleUrls: ['./tabledefinition.component.css']
})
export class TabledefinitionComponent implements OnInit {
  cap : Captain[] = [
    {cid : '1',cname:'abc'},
    {cid : '2',cname:'xyz'}
  ];
  ste : Steward[]  = [
    {sid : '1',sname:'aa'},
    {sid : '2',sname:'bb'}
  ]
  sta : Status[]  = [
    {stid : '1',stname:'Active'},
    {stid : '2',stname:'Inactive'}
  ]
  rows: Array<{tableid:string,pax:string,reporting:string,status:string,view:string,captain:string,steward:string}> = [];
  buttoncontent : string;abDatasource;listcount : number; buttonColor : string; tabledatalist : Apiresponse; tabledata : Data[];
  table_defination_id : number;    table_capatain : string;    table_description: string;
    table_name: string;    table_pax: number;    table_status: string; 
    table_steward: string;    table_view : string; jsRes : JsResponse;
  displayedColumns: string[] = ['table_defination_id','table_name','table_pax','table_view','table_status','actions']; //'view','captain','steward',
  constructor(public service1 : RestaurantService) { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.service1.gettabledata(1).subscribe((data:Apiresponse)=> {
      this.tabledatalist = data;
      this.abDatasource = new MatTableDataSource(this.tabledatalist.Data);
    });
  }
  public onSaveclick()
  {
    if(this.table_name == "" || this.table_pax == null)
    {
      alert("Please fill all fields");
    }
    else if(this.buttoncontent == "Save")
    {
      let a : Tabledefinition = {
        restaurent_id:1,
          table_defination_id : this.table_defination_id,
          table_capatain : this.table_capatain,
          table_description: this.table_description,
          table_name: this.table_name,
          table_pax: this.table_pax,
          table_status: this.table_status,
          table_steward: this.table_steward,
          table_view : this.table_view,
      }
       this.service1.createtable(a).subscribe((data : JsResponse) => {

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
      let a : Tabledefinition = {
        restaurent_id:1,
        table_defination_id : this.table_defination_id,
        table_capatain : this.table_capatain,
        table_description: this.table_description,
        table_name: this.table_name,
        table_pax: this.table_pax,
        table_status: this.table_status,
        table_steward: this.table_steward,
        table_view : this.table_view,
    }
     this.service1.updatetable(a).subscribe((data : JsResponse) => {

      this.jsRes = data;
      if(this.jsRes.code==200)
          {
            alert("Table Updated Succesfully.!");
            this.onclearclick();
          }else{ alert("Failed to Update data");}
     });
    }
  }
  public RowSelected(j,table_defination_id:number,table_name:string,table_pax:number,table_description:string,table_status:string,table_view:string,table_capatain:string,table_steward:string)
  {
    this.buttoncontent = "Update";
    this.table_defination_id = table_defination_id;
    this.table_name = table_name;
    this.table_pax =  table_pax;
    this.table_description = table_description;
    this.table_status = table_status;
    this.table_steward = table_steward;
    this.table_view = table_view;
    this.table_capatain = table_capatain;
  }
  public onclearclick()
  {
    this.buttoncontent="Save";
    this.table_name = "";
    this.table_pax =  null;
    this.table_description = "";
    this.table_status = "";
    this.table_steward = "";
    this.table_view = "";
    this.table_capatain = "";
  }
}

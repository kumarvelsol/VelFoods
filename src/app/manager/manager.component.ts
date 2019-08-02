import { Component, OnInit } from '@angular/core';
import { Managermodel } from '../shared/interfaces/managermodel';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Apiresponse } from '../shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { JsResponse } from '../shared/JsResponse';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  displayedColumns: string[] = ['manger_id', 'manger_name', 'restaurent_id', 'manger_mobile_no','manger_status','actions'];
  dataSource ; jsRes :JsResponse;
  restaurents:Data[];
  managerslist:Apiresponse;
  buttoncontent:string;
  manger_id:number;manger_name:string;restaurent_id:number;manger_mobile_no:string;
  manger_status:string;manger_id_proof: string;manger_id_no:string;
  constructor(private service:RestaurantService) { }
  ngOnInit() {
    this.buttoncontent = "Save";
    this.service.getrestaurent(1).subscribe((data:Apiresponse) =>{
      this.restaurents = data.Data;
    });
    this.service.getmanagers(1).subscribe((data:Apiresponse) =>{
      this.managerslist = data;
      this.dataSource = new MatTableDataSource(this.managerslist.Data);
    });
  }

  public onsaveclick()
  {
    if(this.manger_name == "" || this.manger_mobile_no == "")
    {
      alert("Please fill all fields");
    }
    else if(this.buttoncontent == "Save")
    {
      let a : Managermodel = {
        restaurent_id : this.restaurent_id,
        manger_id : this.manger_id,
        manger_name : this.manger_name,
        manger_mobile_no : this.manger_mobile_no,
        manger_id_proof : this.manger_id_proof,
        manger_id_no : this.manger_id_no,
        manger_status : this.manger_status
      }
      this.service.addmanagers(a).subscribe((data : JsResponse) => {
        this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Manager Added Succesfully.!");
              this.onclearclick();
            }else{ alert("Failed to Insert data");}
       });
    }
    else if(this.buttoncontent == "Update")
    {
      let a : Managermodel = {
        restaurent_id : this.restaurent_id,
        manger_id : this.manger_id,
        manger_name : this.manger_name,
        manger_mobile_no : this.manger_mobile_no,
        manger_id_proof : this.manger_id_proof,
        manger_id_no : this.manger_id_no,
        manger_status : this.manger_status
      }
      this.service.updatemanager(a).subscribe((data : JsResponse) => {
        this.jsRes = data;
        if(this.jsRes.code==200)
            {
              alert("Manager Updated Succesfully.!");
              this.onclearclick();
            }else{ alert("Failed to Update data");}
       });
    }
  }

  public onclearclick()
  {
    this.manger_name = "";
    this.manger_mobile_no = "";
    this.manger_id_proof = "";
    this.manger_id_no = "";
    this.manger_status = "";
    this.buttoncontent = "Save";
  }
}
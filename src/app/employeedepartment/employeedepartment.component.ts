import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { EmployeeCategory } from '../shared/interfaces/empcate';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-employeedepartment',
  templateUrl: './employeedepartment.component.html',
  styleUrls: ['./employeedepartment.component.css']
})
export class EmployeedepartmentComponent implements OnInit {
  empdepartement_id:number;
  empdepartement_name:string;
  empdepartement_status:string;
  buttoncontent:string;
  count:number;
  resid:number;restaurent_id : number;
  displayedColumns : string[] =['empdepartement_id','empdepartement_name','empdepartement_status','actions'];
  dataSource;
  constructor(public service :RestaurantService,public route : ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    })
   }
  
  ngOnInit() {
    this.buttoncontent = "Save";
    this.service.getempcategory(this.restaurent_id).subscribe(data =>
    {
      this.dataSource = data.Data;
      this.count =data.Data.length;
      this.empdepartement_id = ++this.count;
    });

  }
  onsaveclick(){
    let empc:EmployeeCategory ={
      empdepartement_id:this.empdepartement_id,
      empdepartement_name:this.empdepartement_name,
      empdepartement_status:this.empdepartement_status,
      restaurent_id:this.restaurent_id
    }
    if(this.buttoncontent =="Save"){
    this.service.addempcate(empc).subscribe(data=>{
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
  else{
    this.service.updateempcategory(empc).subscribe(data=>{
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
  onclearclick(){
    this.buttoncontent="Save";
    this.empdepartement_name="";
    this.empdepartement_status="";
  }
  public RowSelected(i:number,empdepartement_id:number,empdepartement_name:string,empdepartement_status:string)
  {
    this.buttoncontent ="Update";
    this.empdepartement_id =empdepartement_id;
    this.empdepartement_name =empdepartement_name;
    this.empdepartement_status =empdepartement_status;
  }
}

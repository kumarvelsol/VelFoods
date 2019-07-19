import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { EmployeeCategory } from '../shared/interfaces/empcate';
import { Breakpoints } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material';

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
  displayedColumns : string[] =['empdepartement_id','empdepartement_name','empdepartement_status','actions'];
  dataSource;
  constructor(public service :RestaurantService) {  }
  
  ngOnInit() {
    this.buttoncontent = "Save";
    this.service.getempcategory(1).subscribe(data =>
    {
      this.dataSource = new MatTableDataSource(data.Data);
    });

  }
  onsaveclick(){
    let empc:EmployeeCategory ={
      empdepartement_id:this.empdepartement_id,
      empdepartement_name:this.empdepartement_name,
      empdepartement_status:this.empdepartement_status,
      restaurent_id:1
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

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { EmployeeRegistration } from '../shared/interfaces/empcate';
import { EmptyOutletComponent } from '@angular/router/src/components/empty_outlet';
import { debug } from 'util';
import { Data, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {
  empregistration_id:number;empdepartement_name:string;
  empregistration_name:string;
  empregistration_mobile_no:number;
  empregistration_email_id:string;
  empregistration_id_proof:string;
  empregistration_id_data:string;
  empregistration_Address:string;
  empdepartement_id:number;
  empregistration_status:string;
  empregistration_login_type:string;
  Username:string;
  password:string;
  restaurent_id :number;
  buttoncontent:string;
  buttoncontent1:string;
  count:number;empdept:Data[];
  displayedColumns : string[] =['empregistration_id','empregistration_name','empregistration_mobile_no','empregistration_status','actions'];
  dataSource;
  constructor(public service: RestaurantService,public route : ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    })
   }
  ngOnInit() {
    this.buttoncontent="Save";
    this.buttoncontent1="Clear";
    this.service.getempreg(this.restaurent_id).subscribe(data =>
      {
        this.dataSource = data.Data;
        console.log(this.dataSource);
        this.count =data.Data.length;
        this.empregistration_id = ++this.count;
      });
      this.service.getempcategory(this.restaurent_id).subscribe(data =>
        {
          this.empdept = data.Data;
        });
  }
  onsaveclick(){
    let empr:EmployeeRegistration ={
      empregistration_id:this.empregistration_id,
      empregistration_name:this.empregistration_name,
      empregistration_mobile_no:this.empregistration_mobile_no,
      empregistration_email_id:this.empregistration_email_id,
      empregistration_id_proof:this.empregistration_id_proof,
      empregistration_id_data:this.empregistration_id_data,
      empregistration_Address:this.empregistration_Address,
      empdepartement_id:this.empdepartement_id,
      empregistration_status:this.empregistration_status,
      empregistration_login_type:this.empregistration_login_type,
      Username:this.Username,
      password:this.password,
      restaurent_id:this.restaurent_id

    }
    if(this.buttoncontent =="Save")
    {
      this.service.addempreg(empr).subscribe(data =>{
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
      this.service.updateempreg(empr).subscribe(data =>{
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
    this.empregistration_id =Number(""),
    this.empregistration_name ="",
    this.empregistration_mobile_no=Number(""),
    this.empregistration_email_id="",
    this.empregistration_id_proof="",
    this.empregistration_id_data="",
    this.empregistration_Address="",
    this.empregistration_status="",
    this.empregistration_login_type="",
    this.Username="",
    this.password ="",
    this.buttoncontent = "Save";
  }
  public RowSelected(i,empregistration_id:number,empregistration_name:string,
    empregistration_mobile_no:number,
    empregistration_email_id:string,
    empregistration_id_proof:string,
    empregistration_id_data:string,
    empregistration_Address:string,
    empregistration_login_type:string,empdepartement_id:number,
    empregistration_status:string,Username:string,password:string){
    this.buttoncontent ="Update";
    this.empregistration_id =empregistration_id,
    this.empregistration_name =empregistration_name,
    this.empregistration_mobile_no=empregistration_mobile_no,
    this.empregistration_email_id=empregistration_email_id,
    this.empregistration_id_proof=empregistration_id_proof,
    this.empregistration_id_data=empregistration_id_data,
    this.empregistration_Address=empregistration_Address,
    this.empregistration_status=empregistration_status,
    this.empdepartement_id = empdepartement_id,
    this.empregistration_login_type=empregistration_login_type,
    this.Username=Username,
    this.password =password
  }
}

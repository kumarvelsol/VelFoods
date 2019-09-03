import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Tax } from 'src/app/shared/interfaces/tax';
import { MatTableDataSource } from '@angular/material';
import { Responce } from 'src/app/shared/js-response';
import { Data } from 'src/app/shared/data';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SidenavToolbarComponent } from 'src/app/ui/sidenav-toolbar/sidenav-toolbar.component';
@Component({
  selector: 'app-taxpage',
  templateUrl: './taxpage.component.html',
  styleUrls: ['./taxpage.component.css']
})
export class TaxpageComponent implements OnInit {
  rows: Array<{taxid:number, taxname:string,percentage:number,reportname:string,activefrom:string,status:string}> = [];
  //data: any = [{taxid:1, taxname:"Five",percentage:5,reportname:"Dharani",status:"Active"}, {taxid:2, taxname:"Three",percentage:3,reportname:"Dharani",status:"Active"} ];
  dataSource;buttoncontent : string = "Save"; restaurent_id : number;
  taxid : number; taxname : string; percentage : number; reportname : string; activefrom : string; status : string; empregistration_name : string;
  emplist;
  displayedColumns : string[] = ["tax_id", "tax_name","tax_percentage", "tax_employeename","tax_Active_from","tax_status","actions"];
  constructor(public service : RestaurantService,public route : ActivatedRoute,public sidenav : SidenavToolbarComponent){
    this.route.queryParams.subscribe(params =>
      {
        this.restaurent_id = LoginComponent.rid;
      })
  }
  ngOnInit() {
    this.sidenav.ShowSpinnerHandler(true);
    this.LoadingList();
    this.service.getempreg(this.restaurent_id).subscribe(data =>
      {
        this.emplist = data.Data;
      });
      this.sidenav.ShowSpinnerHandler(false);
  }
  onclear()
  {
    this.taxname = "";
    this.percentage = null;
    this.reportname = "";
    this.activefrom = "";
    this.status = "";
    this.buttoncontent = "Save";
    this.LoadingList();
    this.taxid = 0;
  }
  onsave()
  {
    this.sidenav.ShowSpinnerHandler(true);
    if(this.taxname =="" || this.percentage == null  || this.activefrom == "" || this.status == "")
    {
      alert("Please fill all fields");
    }
    else
    {
      if(this.buttoncontent == "Save"){
        let tax : Tax = {
          tax_name : this.taxname,
          tax_percentage : this.percentage,
          tax_Active_from : this.activefrom,
          tax_status : this.status,
          restaurent_id : this.restaurent_id,
          tax_employeename : this.empregistration_name,
        }
        this.service.AddTax(tax).subscribe(data=>{
          this.sidenav.ShowSpinnerHandler(false);
          if(data.code == 200){
            alert(data.message);
            this.onclear();
          }else{
            this.sidenav.ShowSpinnerHandler(false);
            alert(data.message);
          }
        });
      }else if(this.buttoncontent == "Update"){
        this.service.UpdateTax(this.taxid,this.taxname,this.percentage,this.activefrom,this.status,this.restaurent_id,this.empregistration_name).subscribe(data=>{
          this.sidenav.ShowSpinnerHandler(false);
          if(data.code == 200){
            alert(data.message);
            this.onclear();
          }else{
            this.sidenav.ShowSpinnerHandler(false);
            alert(data.message);
          }
        });
      }
    }
    this.onclear();
  }
  public LoadingList(){
    this.service.TaxList(this.restaurent_id).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  index : number;
  public RowSelected(i:number,tax_id:number,tax_name:string,tax_percentage:number,tax_employeename:string,tax_Active_from:string,tax_status:string)
  {
    this.index = i;
    this.buttoncontent = "Update";
    this.taxid = tax_id;
    this.taxname =  tax_name;
    this.percentage = tax_percentage;
    this.empregistration_name = tax_employeename;
    this.activefrom = tax_Active_from;
    this.status = tax_status;
  }
}
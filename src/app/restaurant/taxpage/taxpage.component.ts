import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Tax } from 'src/app/shared/interfaces/tax';
import { MatTableDataSource } from '@angular/material';
import { Responce } from 'src/app/shared/js-response';
import { Data } from 'src/app/shared/data';
@Component({
  selector: 'app-taxpage',
  templateUrl: './taxpage.component.html',
  styleUrls: ['./taxpage.component.css']
})
export class TaxpageComponent implements OnInit {
  rows: Array<{taxid:number, taxname:string,percentage:number,reportname:string,activefrom:string,status:string}> = [];
  //data: any = [{taxid:1, taxname:"Five",percentage:5,reportname:"Dharani",status:"Active"}, {taxid:2, taxname:"Three",percentage:3,reportname:"Dharani",status:"Active"} ];
  dataSource;buttoncontent : string = "Save";
  taxid : number; taxname : string; percentage : number; reportname : string; activefrom : string; status : string;
  emplist;
  displayedColumns : string[] = ["tax_id", "tax_name","tax_percentage", "tax_employeename","tax_Active_from","tax_status","actions"];
  constructor(public service : RestaurantService){}
  ngOnInit() {
    this.LoadingList();
    this.service.getempreg(1).subscribe(data =>
      {
        this.emplist = new MatTableDataSource(data.Data);
      });
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
    if(this.taxname =="" || this.percentage == null || this.reportname == "" || this.activefrom == "" || this.status == "")
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
          restaurent_id : 1,
          tax_employeename : this.reportname,
        }
        this.service.AddTax(tax).subscribe(data=>{
          if(data.code == 200){
            alert(data.message);
            this.onclear();
          }else{
            alert(data.message);
          }
        });
      }else if(this.buttoncontent == "Update"){
        this.service.UpdateTax(this.taxid,this.taxname,this.percentage,this.activefrom,this.status,1,this.reportname).subscribe(data=>{
          if(data.code == 200){
            alert(data.message);
            this.onclear();
          }else{
            alert(data.message);
          }
        });
      }
    }
    this.onclear();
  }
  public LoadingList(){
    this.service.TaxList(1).subscribe(data =>{
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
    this.reportname = tax_employeename;
    this.activefrom = tax_Active_from;
    this.status = tax_status;
  }
}
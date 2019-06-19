import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxpage',
  templateUrl: './taxpage.component.html',
  styleUrls: ['./taxpage.component.css']
})
export class TaxpageComponent implements OnInit {
  rows: Array<{taxid:number, taxname:string,percentage:number,reportname:string,activefrom:string,status:string}> = [];
  //data: any = [{taxid:1, taxname:"Five",percentage:5,reportname:"Dharani",status:"Active"}, {taxid:2, taxname:"Three",percentage:3,reportname:"Dharani",status:"Active"} ];
  dataSource;buttoncontent:string;
  taxid:number;taxname:string;percentage:number;reportname:string;activefrom:string;status:string;
  displayedColumns: string[] = ["taxid", "taxname","percentage", "reportname","activefrom","status","actions"];
  constructor() { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.rows = [{taxid:1, taxname:"Five",percentage:5,reportname:"Dharani",activefrom:"6/19/2019",status:"Active"},
                   {taxid:2, taxname:"Three",percentage:3,reportname:"Dharani",activefrom:"6/18/2019",status:"Active"}];
    this.dataSource = this.rows;
  }
  onclear()
  {
    this.taxname="";this.percentage=null;this.reportname="";this.activefrom = "";this.status="";
    this.buttoncontent = "Save";
  }
  onsave()
  {
    // this.data = [this.taxid,this.taxname,this.percenatge,this.reportname,this.status];
    // console.log(this.data);
    this.rows.push({taxid:this.taxid, taxname:this.taxname,percentage:this.percentage,reportname:this.reportname,activefrom:this.activefrom,status:this.status});
    this.dataSource = this.rows;
    console.log(this.dataSource);
    //this.taxname="";this.percentage=null;this.reportname="";this.status="";
  }
  public RowSelected(i:number,taxid:number,taxname:string,percentage:number,reportname:string,activefrom:string,status:string)
  {
      this.buttoncontent="Modify";
      this.taxid = taxid;
      this.taxname =  taxname;
      this.percentage = percentage;
      this.reportname = reportname;
      this.activefrom = activefrom;
      this.status = status;
  }
}

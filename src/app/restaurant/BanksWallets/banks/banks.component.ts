import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  rows: Array<{bankid:string, bankcode:string,bankname:string,reportname:string,status:string}> = [];
  dataSource;buttoncontent:string;
  bankid:string;bankcode:string;bankname:string;reportname:string;status:string;
  displayedColumns: string[] = ["bankid", "bankcode","bankname", "reportname","status","actions"];
  constructor() { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.rows = [{bankid:"1", bankcode:"111",bankname:"State Bank of India",reportname:"Dharani",status:"Active"},
                   {bankid:"2", bankcode:"222",bankname:"Bank of India",reportname:"Dharani",status:"InActive"}];
    this.dataSource = this.rows;
  }
  onclear()
  {
    this.bankcode = "";this.bankname = "";this.reportname = "";this.status = "";
    this.buttoncontent = "Save";
  }
  onsave()
  {
    if(this.bankcode == "" || this.bankname == "" || this.reportname == "" || this.status == "")
    {
      alert("Please fill all fields");
    }
    else
    {
      this.rows.push({bankid:"3",bankcode:this.bankcode,bankname:this.bankname,reportname:this.reportname,status:this.status});
      this.dataSource = this.rows;
      console.log(this.dataSource);
    }
    this.onclear();
  }
  public RowSelected(i:number,bankcode:string,bankname:string,reportname:string,status:string)
  {
    this.buttoncontent="Update";
    this.bankcode =  bankcode;
    this.bankname = bankname;
    this.reportname = reportname;
    this.status = status;
  }
}

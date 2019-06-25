import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  rows: Array<{walletid:string, walletcode:string,walletname:string,reportname:string,status:string}> = [];
  dataSource;buttoncontent:string;
  walletid:string;walletcode:string;walletname:string;reportname:string;status:string;
  displayedColumns: string[] = ["walletid", "walletcode","walletname", "reportname","status","actions"];
  constructor() { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.rows = [{walletid:"1", walletcode:"111",walletname:"Paytm",reportname:"Dharani",status:"Active"},
                   {walletid:"2", walletcode:"222",walletname:"AmazonPay",reportname:"Dharani",status:"InActive"}];
    this.dataSource = this.rows;
  }
  onclear()
  {
    this.walletcode = "";this.walletname = "";this.reportname = "";this.status = "";
    this.buttoncontent = "Save";
  }
  onsave()
  {
    if(this.walletcode == "" || this.walletname == "" || this.reportname == "" || this.status == "")
    {
      alert("Please fill all fields");
    }
    else
    {
      this.rows.push({walletid:"3",walletcode:this.walletcode,walletname:this.walletname,reportname:this.reportname,status:this.status});
      this.dataSource = this.rows;
      console.log(this.dataSource);
    }
    this.onclear();
  }
  public RowSelected(i:number,walletcode:string,walletname:string,reportname:string,status:string)
  {
    this.buttoncontent="Update";
    this.walletcode =  walletcode;
    this.walletname = walletname;
    this.reportname = reportname;
    this.status = status;
  }
}

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';
import { Walletsmodel } from 'src/app/shared/walletsmodel';
import { JsResponse, Data } from 'src/app/shared/js-response';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  rows: Array<{walletid:string, walletcode:string,walletname:string,reportname:string,status:string}> = [];
  dataSource;buttoncontent:string;JsResponse; walletdata : Data[];
  wallet_id:string;wallet_code:string;wallet_name:string;wallet_reporting_name:string;wallet_status:string;
  empregistration_name : string;emplist;
  displayedColumns: string[] = ["wallet_id", "wallet_code","wallet_name", "wallet_reporting_name","wallet_status","actions"];
  constructor(public service : RestaurantService) { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.service.getwallets(1).subscribe((data :JsResponse )=>
      {
        this.dataSource = data.Data;
      });
      this.service.getempreg(1).subscribe(data =>
        {
          this.emplist = data.Data;
        });
  }
  onclear()
  {
    this.buttoncontent = "Save";
  }
  onsave()
  {
    let a : Walletsmodel = {
      wallet_id :this.wallet_id,
      wallet_code:this.wallet_code,
      wallet_name:this.wallet_name,
      wallet_reporting_name:this.empregistration_name,
      wallet_status:this.wallet_status,
      empregistration_id:1,
      restaurent_id:1
    }
    if(this.buttoncontent =="Save")
   {
     this.service.addwallets(a).subscribe(data =>
      {
        if(data.code ==200){
          alert(data.message);
          this.ngOnInit();
          this.onclear();
        }
        else{
          alert(data.message);
          this.ngOnInit();
          this.onclear();
        }
      });
   }
   else
   {
     this.service.updatewallets(a).subscribe(data =>
      {
        if(data.code ==200){
          alert(data.message);
          this.ngOnInit();
          this.onclear();
        }
        else
        {
          alert(data.message);
          this.ngOnInit();
          this.onclear();
        }
      });
   }
    
  }
  public RowSelected(i:number,wallet_id:string,wallet_code:string,wallet_name:string,wallet_reporting_name:string,wallet_status:string)
  {
    //debugger;
    this.buttoncontent="Update";
    this.wallet_id =  wallet_id;
    this.wallet_code =  wallet_code;
    this.wallet_name = wallet_name;
    this.empregistration_name = wallet_reporting_name;
    this.wallet_status = wallet_status;
  }
}

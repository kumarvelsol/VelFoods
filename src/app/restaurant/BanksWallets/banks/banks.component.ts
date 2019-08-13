import { Component, OnInit } from '@angular/core';
import { RestaurantModule } from '../../restaurant.module';
import { RestaurantService } from '../../restaurant.service';
import { bank } from 'src/app/shared/interfaces/empcate';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  rows: Array<{bankid:string, bankcode:string,bankname:string,reportname:string,status:string}> = [];

//  rows: Array<{bankid:string, bankcode:string,bankname:string,reportname:string,status:string}> = [];
bank_id:number;
bank_code:string;
bank_name:string;
bank_account_no:number;
bank_status:string;
bank_reporting_name:string;
empregistration_id:number;
restaurent_id:number;
dataSource;
buttoncontent:string;
empregistration_name : string;emplist;

displayedColumns: string[] = ["bank_id", "bank_code","bank_name", "bank_reporting_name","bank_status","actions"];
  constructor(public service :RestaurantService) { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.service.getbanks(1).subscribe(data =>
      {
        this.dataSource = data.Data;
      });
      this.service.getempreg(1).subscribe(data =>
        {
          this.emplist = data.Data;
        });
  }
  onclearclick()
  {
    //alert("no");
    this.bank_code = "";
    this.bank_name = "";
    this.bank_reporting_name = "";
    this.bank_status = "";
    this.bank_account_no =Number("");
    this.buttoncontent = "Save";
  }
  onsaveclick()
  {
    //alert("yes");
   let bankb: bank ={
     bank_id :this.bank_id,
     bank_code:this.bank_code,
     bank_name:this.bank_name,
     bank_account_no:this.bank_account_no,
     bank_reporting_name:this.empregistration_name,
     bank_status:this.bank_status,
     empregistration_id:1,
     restaurent_id:1
   } 
   if(this.buttoncontent =="Save")
   {
     this.service.addbank(bankb).subscribe(data =>
      {
        if(data.code ==200){
          alert(data.message);
          this.ngOnInit();
          this.onclearclick();
        }
        else{
          alert(data.message);
          this.ngOnInit();
          this.onclearclick();
        }
      });
   }
   else
   {
     this.service.updatebank(bankb).subscribe(data =>
      {
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
  public RowSelected(i:number,bank_id:number,bank_code:string,bank_name:string,bank_reporting_name:string,bank_status:string,bank_account_no:number)
  {
    this.buttoncontent="Update";
    this.bank_id =bank_id;
    this.bank_code =  bank_code;
    this.bank_name = bank_name;
    this.empregistration_name = bank_reporting_name;
    this.bank_account_no = bank_account_no;
    this.bank_status = bank_status;
  }
}

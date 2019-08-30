import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MatDialog, MatTable } from '@angular/material';
import { TakeawaydialogComponent } from './takeawaydialog/takeawaydialog.component';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Prints } from 'src/app/shared/interfaces/Prints';
import { DatePipe } from '@angular/common';
import { JsResponse } from 'src/app/shared/js-response';
import { Takeawayplan } from 'src/app/shared/takeawayplan';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-takeaway',
  templateUrl: './takeaway.component.html',
  styleUrls: ['./takeaway.component.css']
})
export class TakeawayComponent implements OnInit {
  dataSource;orders:any[]=[];buttoncontent:string;radio:string;
  displayedColumns: string[] = ["itemname_id", "order_itemname","order_rate","order_quantity", "order_tax_amount","order_totalamount","actions"];
  amount:number=0;parcelamount:number=0;gtotalamount:number=0;order_totalamount:number;disable:boolean=true;
  discamount:number=0;
  @ViewChild(MatTable) table: MatTable<any>; 
  Table_Id: number;
  Discount_amount : number = 0;
  AmountAfterDiscount : number;
  ActualAmount: number;percentage:number;
  OffId : number;planslist;
  constructor(private router: Router,public datepipe: DatePipe,private service : RestaurantService,public dialog: MatDialog,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
  }

  ngOnInit() {
    this.openDialog('Add',{});
    // this.service.getplans(this.restaurent_id).subscribe(data =>{
    //   this.planslist = data.Data;
    // });
    this.service.ActiveOffers(this.restaurent_id).subscribe(data =>{
      this.planslist = data.Data;
    });
    console.log(this.planslist);
  }
  onChange($event)
  {
    //this.gtotalamount = (+this.amount) + (+this.parcelamount);
    this.gtotalamount = (+this.gtotalamount) + (+this.parcelamount);
  }
  onradiochange()
  {
    if(this.radio == "Yes")
    {
      this.disable = false;
    }
    else
    {
      this.disable = true;
    }
  }
  count:number;
  openDialog(action,obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(TakeawaydialogComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.action == 'Add')
      {
        console.log(result);
        this.orders.push(result);
        this.dataSource = this.orders; 
        this.dataSource = [...this.dataSource];
        this.count = this.dataSource.length;
        console.log(this.dataSource);
        this.buttoncontent = "Save";
        this.amount = 0;
        this.gtotalamount = 0;
        for(let j=0;j<this.count;j++)
        {
          console.log(this.orders[j].order_totalamount);
          this.amount += this.orders[j].order_totalamount;
          this.gtotalamount += this.orders[j].order_totalamount;
        }
        //this.table.renderRows();
      }
      else if(result.action == 'Update')
      {
        this.amount = 0;
        this.gtotalamount = 0;
        for(let j=0;j<this.count;j++)
        {
          console.log(this.orders[j].order_totalamount);
          this.amount += this.orders[j].order_totalamount;
          this.gtotalamount += this.orders[j].order_totalamount;
        }
        //this.updateRowData(result.data); 
      }
      else if(result.action == 'Delete')
      {
        //this.deleteRowData(result.data);
      }
    });
  }
  planpercentage:number;
  onplanchange()
  {
    debugger;
    this.service.ActiveOffers(this.restaurent_id).subscribe(data =>{
      this.planslist = data.Data;
      console.log(this.planslist);
      for(let i=0;i<data.Data.length;i++)
      {
        if(this.percentage == data.Data[i].percentage)
        {
          debugger;
          //this.planpercentage = data.Data[i].percentage;
          this.discamount = (this.amount * this.percentage) / 100;
          this.gtotalamount = this.gtotalamount - (this.amount * this.percentage) / 100 ;
          //this.amount = this.gtotalamount;
          break;
        }
      }
    });
    this.disable = true;
  }
    public onpaymentclick()
    {
      let date: Date = new Date();
      let print_data : Takeawayplan = {
        total_amount : this.amount,
        discount_amount : (this.gtotalamount * this.planpercentage) / 100,
        print_status : "Printed",
        restaurent_id : this.restaurent_id,
        total_after_discount : this.gtotalamount,
        parcel_charges : this.parcelamount,
        status : "Takeaway",
        insert_by : "velsol",
        insert_date : this.datepipe.transform(date.toDateString(),'yyyy-MM-dd'),
      }
      this.service.PrintInserttakeaway(print_data).subscribe((data : JsResponse) =>{
        if(data.code == 200){
          alert(data.message);
        }else{
          alert(data.message);
        }
      });
      this.NavigateClick(this.gtotalamount);
    }
    restaurent_id:number;
  public NavigateClick(gtotalamount:number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "amount":this.gtotalamount = gtotalamount
      }
    };
    this.router.navigate(['Home/BillPayment'],navigationExtras); 
  }
}

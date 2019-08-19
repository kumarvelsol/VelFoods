import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { order, room } from 'src/app/Model/ordermodel';
import { RestaurantService } from '../restaurant.service';
import { Responce, Data, JsResponse } from 'src/app/shared/js-response';
import { OffersDialogComponent } from '../offers-dialog/offers-dialog.component';
import { MatDialog, MatTable, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { Prints } from 'src/app/shared/interfaces/Prints';
export interface PeriodicElement {
  ItemName : string;
  Rate : number;
  Tax : number;
  Quantity : number;
  Total : number;
}
export interface ParsingData {
  table_name : number;
  total_amount : number;
  DiscountAmount : number;
  AmountAfterDiscount : number;
  OfferId : number;
  Percentage : number;
  MinBillAmount : number;
  MaxDiscountAmount : number;
  PromoCode : string;
}
@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  providers: [ServiceService],
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>; 
  constructor(private service : RestaurantService,public dialog: MatDialog) { }
  userlist:order;
  rooms : room[];
  count: number;
  kot_id:number;
  tables :Data[]; table_pax : number;
  listcount : number;tname:number; table_name : string;table_defination_id : number;
  itemnames:any[] =[];
  Rate:any[] =[];
  quantity:any[] =[];
  total:any[] =[];
  restaurent_id:number;
  tax:any[] =[]; totalamount : number; amount : number;
  rows: Array<{order_itemname:string, order_rate:number,order_tax:number,order_quantity:number,order_totalamount:number}> = [];
  array =[];
  dataSource ;
  displayedColumns: string[] = ['order_itemname', 'order_rate', 'order_tax', 'order_quantity','order_totalamount'];
  Payment_disable : boolean;
  availOffer_disable : boolean;
  print_disable : boolean;
  tables_disable : boolean;
  ngOnInit()
  {
    this.Payment_disable = true;
    this.availOffer_disable = true;
    this.print_disable = true;
    this.tables_disable = false;
    this.service.gettabledata(1).subscribe((data : Responce) =>
    {
      this.count = data.Data.length;
      this.kot_id = this.count + 1;
      console.log(data);
      this.tables =data.Data;
    });
  }
  Table_Id: number;
  onbuttonclick($event,table_name,table_defination_id,BACKGROUND_COLOR)
  {
    if(BACKGROUND_COLOR == "Darkslategray"){
      this.print_disable = true;
      this.availOffer_disable = true;
      this.Payment_disable = false;
    }else if(BACKGROUND_COLOR == "Green"){
      this.print_disable = true;
      this.availOffer_disable = true;
      this.Payment_disable = true;
    }else{
      this.print_disable = false;
      this.availOffer_disable = false;
      this.Payment_disable = true;
    }
    this.amount = 0;
    this.tname = table_name;
    this.Table_Id = table_defination_id;
    this.service.getorderitems(1,this.tname).subscribe((data : Responce) =>
     {
          this.dataSource = data.Data;
          console.log(this.dataSource);
          this.listcount = data.Data.length;
          for(let i =0;i<this.listcount;i++)
          {
            this.totalamount = data.Data[i].order_totalamount;
            this.amount = this.amount + this.totalamount;
          }
     });
  }
  Parsing_data : ParsingData[];
  onsaveclick(){
    if(this.tname == null || this.Table_Id == null ){
      alert("Please Select the Table..!");
    }else{
      if(this.Offer_Id == 0){
        this.AmountAfterDiscount = this.amount;
        this.ActualAmount = this.amount;
      }
      let print_data : Prints = {
        table_defination_id : this.Table_Id,
        total_amount : this.ActualAmount,
        offers_id : this.Offer_Id,
        discount_amount : this.Discount_amount,
        print_status : "Prited",
        restaurent_id : 1,
        total_after_discount : this.AmountAfterDiscount,
        insert_by : "velsol",
        insert_date : "2019-08-19",
      }
      console.log(print_data);
      this.service.PrintInsert(print_data).subscribe((data : JsResponse) =>{
        if(data.code == 200){
          alert(data.message);
        }else{
          alert(data.message);
        }
      })
    }
  }
  Offer_Id : number = 0;
  Discount_amount : number = 0;
  AmountAfterDiscount : number;
  ActualAmount: number;
  onsettleclick(){

  }
  onofferclick(): void{
    if(this.amount > 0){
      let p_data : ParsingData = {
        table_name : this.tname,
        total_amount : this.amount,
        DiscountAmount : 0,
        AmountAfterDiscount : 0,
        OfferId : 0,
        Percentage : 0,
        MinBillAmount : 0,
        MaxDiscountAmount : 0,
        PromoCode : "",
      }
      const dialogRef = this.dialog.open(OffersDialogComponent, {
        data: p_data
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.amount = result.AmountAfterDiscount;
        this.Discount_amount = result.DiscountAmount;
        this.ActualAmount = result.total_amount;
        this.Offer_Id = result.OfferId;
        this.AmountAfterDiscount = result.AmountAfterDiscount;
        console.log(this.amount);
        if(this.Offer_Id == 0){
          this.tables_disable = false;
        }else{
          this.tables_disable = true;
        }
      });
    }else{
      alert("Please select the Occupied Table to apply an offer");
    }
  }
}
// onbuttonclick($event,table_name)
// {
// this.dataSource = null;
//     this.rows = null;
//   //  this.colorr;
//    this.tname = table_name;
//    console.log(this.tname);
   
//           this.service.getorders(1).subscribe((data : Responce) =>
//           {
//             this.listcount = data.Data.length;
//             for(let i = 0;i<this.listcount;i++)
//             {
//               this.table_defination_id = data.Data[i].table_defination_id;
//               console.log(this.table_defination_id);
//                 if(this.table_defination_id == this.tname)
//                 {
//                   // this.itemnames.push(data.Data[i].order_itemname);
//                   // this.Rate.push(data.Data[i].order_rate);
//                   // this.quantity.push(data.Data[i].order_quantity);
//                   // this.total.push(data.Data[i].order_totalamount);
//                   // this.tax.push(data.Data[i].order_tax);

//                   this.order_itemname = data.Data[i].order_itemname;
//                   this.order_rate = data.Data[i].order_rate;
//                   this.order_quantity = data.Data[i].order_quantity;
//                   this.order_totalamount = data.Data[i].order_totalamount;
//                   this.order_tax = data.Data[i].order_tax;
//                   this.rows = [{order_itemname : this.order_itemname,order_rate : this.order_rate,order_quantity : this.order_quantity,order_totalamount : this.order_totalamount,order_tax : this.order_tax}];
//                   this.array.push(this.rows);
//                 }
//                 this.dataSource = this.array;
//             }
//             console.log(this.dataSource);
//            // this.dataSource.push(this.itemnames,this.Rate,this.quantity,this.total,this.tax);
//             // console.log(this.array);
             
//           });
//          // this.array.push(this.itemnames,this.Rate,this.quantity,this.total,this.tax);
//         //  console.log(this.array);
//           // this.table_name = table_name;
//           // this.table_pax = data.Data[i-1].table_pax; 
//     }
//     order_itemname : string;order_rate : number;
//     order_quantity : number;
//     order_totalamount : number;
//     order_tax : number;
//}
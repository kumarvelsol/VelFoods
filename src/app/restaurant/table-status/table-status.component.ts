import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { order, room } from 'src/app/Model/ordermodel';
import { RestaurantService } from '../restaurant.service';
import { Responce, Data } from 'src/app/shared/js-response';
import { OffersDialogComponent } from '../offers-dialog/offers-dialog.component';
import { MatDialog, MatTable, MatTableDataSource, MatDialogConfig } from '@angular/material';
export interface PeriodicElement {
  ItemName : string;
  Rate : number;
  Tax : number;
  Quantity : number;
  Total : number;
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
  ngOnInit()
  {
    this.service.gettabledata(1).subscribe((data : Responce) =>
    {
      this.count = data.Data.length;
      this.kot_id = this.count + 1;
      console.log(data);
      this.tables =data.Data;
    });
  }
  onbuttonclick($event,table_name)
  {
    this.amount = 0;
    this.tname = table_name;
    this.service.getorderitems(1,this.tname).subscribe((data : Responce) =>
     {
          this.dataSource = data.Data;
          this.listcount = data.Data.length;
          for(let i =0;i<this.listcount;i++)
          {
            this.totalamount = data.Data[i].order_totalamount;
            this.amount = this.amount + this.totalamount;
          }
     });
  }
  onofferclick(action,obj): void{
    obj.action = action;
    const dialogRef = this.dialog.open(OffersDialogComponent, {
      width: '250px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      // if(result.action == 'Add')
      // {
      //   console.log(result);
      //   this.dataSource.push(result); 
      //   this.dataSource = [...this.dataSource]; 
      // }
      // else if(result.action == 'Update')
      // {
      //   //this.updateRowData(result.data); 
      // }
      // else if(result.action == 'Delete')
      // {
      //   //this.deleteRowData(result.data);
      // }
    });
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
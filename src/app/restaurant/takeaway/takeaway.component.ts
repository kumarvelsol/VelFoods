import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MatDialog, MatTable } from '@angular/material';
import { TakeawaydialogComponent } from './takeawaydialog/takeawaydialog.component';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-takeaway',
  templateUrl: './takeaway.component.html',
  styleUrls: ['./takeaway.component.css']
})
export class TakeawayComponent implements OnInit {
  dataSource;orders:any[]=[];buttoncontent:string;radio:string;
  displayedColumns: string[] = ["itemname_id", "order_itemname","order_rate","order_quantity", "order_tax_amount","order_totalamount","actions"];
  amount:number=0;parcelamount:number=0;gtotalamount:number=0;order_totalamount:number;disable:boolean=false;
  @ViewChild(MatTable) table: MatTable<any>; 
  constructor(private router: Router,private service : RestaurantService,public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog('Add',{});
  }
  onChange($event)
  {
    this.gtotalamount = (+this.amount) + (+this.parcelamount);
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
        for(let j=0;j<this.count;j++)
        {
          console.log(this.orders[j].order_totalamount);
          this.amount += this.orders[j].order_totalamount;
        }
        //this.table.renderRows();
      }
      else if(result.action == 'Update')
      {
        this.amount = 0;
        for(let j=0;j<this.count;j++)
        {
          console.log(this.orders[j].order_totalamount);
          this.amount += this.orders[j].order_totalamount;
        }
        //this.updateRowData(result.data); 
      }
      else if(result.action == 'Delete')
      {
        //this.deleteRowData(result.data);
      }
    });
  }
  
    public NavigateClick()
    {
      let navigationExtras: NavigationExtras = {
        queryParams: {
        }
      };
      this.router.navigate(['/BillPayment'],navigationExtras); 
    }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { order, room } from 'src/app/Model/ordermodel';
import { RestaurantService } from '../restaurant.service';
import { MatDialog } from '@angular/material';
import { Responce, Data } from 'src/app/shared/js-response';
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
  constructor(private service : RestaurantService,public dialog: MatDialog) { }
  userlist:order;
  rooms : room[];
  count: number;
  kot_id:number;
  tables :Data[]; table_pax : number;
  ngOnInit(){
    this.service.getorders(1).subscribe((data : Responce) =>
    {
      this.count = data.Data.length;
      this.kot_id = this.count + 1;
      console.log(data);
      this.tables =data.Data;
    });
  }
  displayedColumns: string[] = ['ItemName', 'Rate', 'Tax', 'Quantity','Total'];
}
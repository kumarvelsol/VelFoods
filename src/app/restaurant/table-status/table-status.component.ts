import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { order, room } from 'src/app/Model/ordermodel';
export interface PeriodicElement {
  ItemName : string;
  Rate : number;
  Tax : number;
  Quantity : number;
  Total : number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ItemName: 'Chicken Family', Rate: 260, Tax: 10, Quantity: 1, Total:270},
  {ItemName: 'Mutton Family', Rate: 350, Tax: 15, Quantity: 1, Total:365},
  {ItemName: 'Gongura Chicken', Rate: 120, Tax: 5, Quantity: 2, Total:250},
];
@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  providers: [ServiceService],
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent implements OnInit {
  constructor(private _roomservice : ServiceService) { }
  userlist:order;
  rooms : room[];
  ngOnInit(){
    this._roomservice.roomno().subscribe((data : order) =>
    {
      this.userlist=data;
      this.rooms = this.userlist.Data;
      console.log(this.userlist.Data);
    });
  }
  displayedColumns: string[] = ['ItemName', 'Rate', 'Tax', 'Quantity','Total'];
  dataSource = ELEMENT_DATA;
}
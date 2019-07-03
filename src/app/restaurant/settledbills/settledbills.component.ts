import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settledbills',
  templateUrl: './settledbills.component.html',
  styleUrls: ['./settledbills.component.css']
})
export class SettledbillsComponent implements OnInit {
  dataSource;
  displayedColumns:string[] =['billno','table','date','Total','Tax','Discounttype','Discount','Status'];
  constructor() { }

  ngOnInit() {
  }

}

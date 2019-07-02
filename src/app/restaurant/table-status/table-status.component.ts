import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import { order, room } from 'src/app/Model/ordermodel';
@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  providers: [ServiceService],
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent implements OnInit {
  constructor(private _roomservice : ServiceService) { }
  ngOnInit(){
  }
}
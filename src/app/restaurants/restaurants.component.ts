import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Id: number;
  Restaurant: string;
  Contact: number;
  Manager: string;
  Status : string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1, Restaurant: 'My Kitchen', Contact: 8787878787, Manager: 'Umesh',Status:'Active'},
  {Id: 2, Restaurant: 'The Patio', Contact: 9797979797, Manager: 'Umesh',Status:'Active'},
];
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  displayedColumns: string[] = ['Id', 'Restaurant', 'Contact', 'Manager','Status'];
  dataSource = ELEMENT_DATA;
  buttoncontent:string = "Add";
}

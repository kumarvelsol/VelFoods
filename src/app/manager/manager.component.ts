import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Id: number;
  Manager: string;
  AltRestaurant: string;
  Mobile: number;
  Status : string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1, Manager: 'Umesh', AltRestaurant: 'My Kitchen', Mobile: 8179893241,Status:'Active'},
  {Id: 2, Manager: 'Umesh', AltRestaurant: 'The Patio', Mobile: 8179893241,Status:'Active'},
];
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['Id', 'Manager', 'AltRestaurant', 'Mobile','Status'];
  dataSource = ELEMENT_DATA;
  
  buttoncontent:string = "Add";

}

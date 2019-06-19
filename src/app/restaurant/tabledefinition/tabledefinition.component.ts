import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledefinition',
  templateUrl: './tabledefinition.component.html',
  styleUrls: ['./tabledefinition.component.css']
})
export class TabledefinitionComponent implements OnInit {
  displayedColumns: string[] = ['designation_id','designation_code','designation_name','status','actions'];
  constructor() { }

  ngOnInit() {
  }

}

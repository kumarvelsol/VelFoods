import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sidenav-toolbar',
  templateUrl: './sidenav-toolbar.component.html',
  styleUrls: ['./sidenav-toolbar.component.css']
})
export class SidenavToolbarComponent implements OnInit {
  opened : false;
  EmployeeName : string;
  EmployeeDesignation : string;
  RestaurantName : string;
  TodayDate : string;
  TodayTime : string;
  imageUrl : string = "assets/images/Profile.jpg";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  constructor(private breakpointObserver: BreakpointObserver,public datepipe: DatePipe) { }
  ngOnInit() {
    let date: Date = new Date();
    this.EmployeeName = "Velsol";
    this.EmployeeDesignation = "Admin";
    this.RestaurantName = "The Patio";
    this.TodayDate = this.datepipe.transform(date.toDateString(),'dd-MM-yyyy');
    this.TodayTime = date.toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1");
  }
  logoutClick(){
    alert("Log Out");
  }
}

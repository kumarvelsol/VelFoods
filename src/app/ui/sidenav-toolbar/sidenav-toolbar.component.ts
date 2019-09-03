import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { Data, JsResponse } from 'src/app/shared/js-response';
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
  resid : number;
  empname:string;
  emproll :string;
  resname :string;
  name:JsResponse[];
  restaurent_name :string;
  imageUrl : string = "assets/images/Profile.jpg";
  showSpinner : boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  constructor(public service: RestaurantService,private breakpointObserver: BreakpointObserver,public datepipe: DatePipe,private route: ActivatedRoute,private router : Router) { 
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.resid = params["resid"];
      this.empname =params["user"];
      this.emproll =params["passw"];
      this.resname =params["rname"];
    });
    let date: Date = new Date();
    this.EmployeeName = this.empname;
    this.EmployeeDesignation = this.emproll;
    this.RestaurantName = this.resname;
    this.restaurent_name ="srikar";
    this.TodayDate = this.datepipe.transform(date.toDateString(),'dd-MM-yyyy');
    this.TodayTime = date.toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1");
  }
  logoutClick(){
    this.router.navigate(['login']); 
    alert("Log Out");
  }
  ShowSpinnerHandler(value){
    this.showSpinner = value;
  }
}
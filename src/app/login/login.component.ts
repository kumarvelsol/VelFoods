import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { login } from '../shared/interfaces/empcate';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrl : string = "assets/images/logo.png";
  constructor(private router: Router,public service :RestaurantService,public route : ActivatedRoute) { }
  username:string;
  password:string;
  resid:number;
  restaurent_id : number;
  static rid : number;
  ngOnInit() {
  }
  onsaveclick(){
    // this.router.navigate(["Home"]);
    let log :login ={
      username :this.username,
      password :this.password,
      
      resid:this.resid
    }
    
    this.service.getlogin(this.username,this.password).subscribe(data =>{
      this.resid = data.resid;
      LoginComponent.rid = this.resid;
      console.log("restid",LoginComponent.rid);
      this.NavigateClick(LoginComponent.rid);
    })
    this.service.login(log).subscribe(data =>{
      if(data.code ==200){
       alert(data.message);
       this.username ="";
       this.password ="";
      }
      else
      {
        this.username ="";
        this.password ="";
        alert(data.message);
      }
    })
    
  }
  NavigateClick(resid : number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "resid": resid = LoginComponent.rid,
      }
    }
    this.router.navigate(["Home"],navigationExtras);
    console.log("rr",LoginComponent.rid);
  }
}
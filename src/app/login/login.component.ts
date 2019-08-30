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
  user :string;
  pssw :string;
  restaurent_id : number;
  static rid : number;
  static un :string;
  static rool :string;
  static na :string;
  ngOnInit() {
  }
  onsaveclick(){
    let log :login ={
      username :this.username,
      password :this.password,
      resid:this.resid
    }
    // this.service.getlogin(this.username,this.password).subscribe(data =>{
    //   this.resid = data.resid;
    //   LoginComponent.rid = data.resid;
    //   LoginComponent.un =data.user;
    //   LoginComponent.rool =data.passw;
    //   LoginComponent.na =data.rname;
    //   console.log("restid",LoginComponent.rid);  
    //   console.log("uname",LoginComponent.un);  
    //   console.log("roll",LoginComponent.rool); 
    //   console.log("resname",LoginComponent.na); 
    // })
    this.service.login(log).subscribe(data =>{
      if(data.code ==200){
       alert(data.message);
       this.username ="";
       this.password ="";
       LoginComponent.rid = data.resid;
       LoginComponent.un =data.user;
       LoginComponent.rool =data.passw;
       LoginComponent.na =data.rname;
       this.NavigateClick(LoginComponent.rid,LoginComponent.rool,LoginComponent.un,LoginComponent.na);
      }
      else
      {
        this.username ="";
        this.password ="";
        alert(data.message);
      }
    })
  }
  NavigateClick(resid : number,user:string,passw:string,rname:string)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "resid": resid = LoginComponent.rid,
        "user": user =LoginComponent.un,
        "passw": passw =LoginComponent.rool,
        "rname": rname =LoginComponent.na

      }
    }
    this.router.navigate(["Home"],navigationExtras);
    console.log("rr",LoginComponent.rid);
  }
}
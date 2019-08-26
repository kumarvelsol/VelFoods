import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { login } from '../shared/interfaces/empcate';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrl : string = "assets/images/logo.png";
  constructor(private router: Router,public service :RestaurantService) { }
  username:string;
  password:string;
  resid:number;
  ngOnInit() {
  }
  onsaveclick(){
    this.router.navigate(["/Home"]);

    let log :login ={
      username :this.username,
      password :this.password,
      
      resid:this.resid
    }
    this.service.getlogin(this.username,this.password).subscribe(data =>{
     // console.log("resid",this.resid);
      
    })
    
    this.service.login(log).subscribe(data =>{
      if(data.code ==200){
        this.resid = data.resid;
       alert(data.message);
       this.username ="";
       this.password ="";
      //  let navigationExtras: NavigationExtras = {
      //   queryParams: {
      //     "resid":this.resid = this.resid,
      //   }
      // };
      this.router.navigate(['src/app/ui/Sidenav-Toolbar']);//,navigationExtras); 
      console.log(this.resid);
      // this.NavigateClick(this.resid);
      }
      else
      {
        this.username ="";
        this.password ="";
        alert(data.message);
        this.ngOnInit();
      }
    })
  }
  public NavigateClick(resid:number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "resid":this.resid = resid,
      }
    };
    this.router.navigate(['src/app/ui/sidenav-toolbar'],navigationExtras); 
    console.log(this.resid);
  }
}
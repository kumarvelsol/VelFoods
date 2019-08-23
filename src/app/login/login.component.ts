import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { login } from '../shared/interfaces/empcate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrl : string = "assets/images/logo.png";
  constructor(public service :RestaurantService) { }
  username:string;
  password:string;
  resid:number;
    ngOnInit() {
    }
    onsaveclick(){
      let log :login ={
        username :this.username,
        password :this.password,
        resid:this.resid
      }
      this.service.login(log).subscribe(data =>{
        if(data.code ==200){
         alert(data.message);
         this.username ="";
         this.password ="";
         this.ngOnInit();
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
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  username:string;
  password:string;
    ngOnInit() {
    }
    onsaveclick(){
      if(this.username =='admin' && this.password =='admin'){
        alert("admin login success");
        this.username ="";
        this.password ="";
      }
      else if(this.username =='casier' && this.password =='casier'){
        alert("casier login success");
        this.username ="";
        this.password ="";
      }
      else if(this.username =='manger' && this.password =='manger'){
        alert("manger login success");
        this.username ="";
        this.password ="";
      }
      else{
        alert("please check the values");
        this.username ="";
        this.password ="";
      }
  
    }
  
  }
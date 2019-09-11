import { Component, OnInit} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   
  constructor(private router: Router) { }
  title = 'Velfoods';
  ngOnInit() {
    this.router.navigate(["/login"]);
  }
}

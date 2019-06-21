import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  propertyname:string;address:string;
  landmark:string;city:string;
  state:string;pincode:number;
  country:string;contactno:number;
  landline:number;email:string;
  website:string;gst:string;buttoncontent:string;
  constructor() { }

  ngOnInit() {
    this.propertyname = "Resto";
    this.address = "1/256, Masjid banda, Kondapur";
    this.landmark ="Near Aadharsh Cooperative bank";
    this.city ="Hyderabad";
    this.state ="Telangana";
    this.pincode =500084;
    this.country ="India";
    this.contactno =7894561235;
    this.landline =256415;
    this.email ="velsol@gmail.com";
    this.website ="www.velsol.com";
    this.gst ="1234ABCDE2ZA";
    if(this.propertyname=="" && this.address=="" && this.landmark=="" && this.city=="" && this.state=="" &&
    this.pincode==null && this.country=="" && this.contactno==null && this.landline==null && this.email=="" && this.website=="" && this.gst=="")
    {
      this.buttoncontent = "Save";
    }
    else
    {
      this.buttoncontent = "Modify";
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Offers, OfferUp } from 'src/app/shared/interfaces/offers';
import { RestaurantService } from '../restaurant.service';
import { MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/format-datepicker';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class OffersComponent implements OnInit {
  constructor(public service : RestaurantService,public datepipe: DatePipe,private atp: AmazingTimePickerService) { }
  opentime() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
    console.log(time);
    this.from_time = time;
    });
  }
  opentotime(){
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
    console.log(time);
    this.to_time = time;
    });
  }
  dates_slide : boolean = false;
  times_slide : boolean = false;
  days_slide : boolean = false;
  minbill_slide : boolean = false;
  maxdis_slide : boolean = false;
  from_date : string;
  to_date : string;
  from_time : string;
  to_time : string;
  promo_name : string;
  promo_code : string;
  percentage : string;
  daysSelected : string;
  minbill_amount : string;
  maxdis_amount : string;
  to_date_disable : boolean;
  from_date_disable : boolean;
  from_time_disable : boolean;
  to_time_disable : boolean;
  daysSelected_disable : boolean;
  mon_disable : boolean;  monday : boolean;
  tue_disable : boolean;  tuesday : boolean;
  wed_disable : boolean;  wednesday : boolean;
  thur_disable : boolean; thursday : boolean;
  fri_disable : boolean;  friday : boolean;
  sat_disable : boolean;  saturday : boolean;
  sun_disable : boolean;  sunday : boolean;
  minbill_disable : boolean;
  maxdis_disable : boolean;
  days_disable : boolean;
  dates_disable : boolean;
  buttoncontent : string = "Save";
  displayedColumns : string[] = ["offers_id","promo_code_name","promo_code","percentage","from_date","to_date","from_time","to_time","minbill_amount","maximum_bill_amount","actions"];
  dataSource;
  ngOnInit() {
    this.to_date_disable = true;
    this.from_date_disable = true;
    this.to_time_disable = true;
    this.from_time_disable = true;
    this.daysSelected_disable = true;
    this.minbill_disable = true;
    this.maxdis_disable = true;
    this.dates_disable = false;
    this.days_disable =false;
    this.disablecheckbox();
    this.LoadingList();
  }
  onDatesValid(){
    if(this.dates_slide == true){
      this.from_date = null;
      this.to_date = null;
      this.to_date_disable = false;
      this.from_date_disable = false;

      //Disabling the Days Section..!
      this.days_disable = true;
    }else{
      this.from_date = null;
      this.to_date = null;
      this.to_date_disable = true;
      this.from_date_disable = true;

      //Enabling the Days Section..!
      this.days_disable = false;
    }
  }
  onTimesValid(){
    if(this.times_slide == true){
      this.from_time = null;
      this.to_time = null;
      this.to_time_disable = false;
      this.from_time_disable = false;
    }else{
      this.from_time = null;
      this.to_time = null;
      this.to_time_disable = true;
      this.from_time_disable = true;
    }
  }
  onDaysValid(){
    if(this.days_slide == true){
      this.daysSelected = "";
      this.daysSelected_disable = false;
      this.enable_checkboxes();
      
      //Disabling the Dates Section..!
      this.dates_disable = true;
    }else{
      this.daysSelected = "";
      this.daysSelected_disable = true;
      this.disablecheckbox();

      //Enabling the Dates Section..!
      this.dates_disable = false;
    }
  }
  onMinBillValid(){
    if(this.minbill_slide == true){
      this.minbill_amount = "";
      this.minbill_disable = false;
    }else{
      this.minbill_amount = "";
      this.minbill_disable = true;
    }
  }
  onMaxDisValid(){
    if(this.maxdis_slide == true){
      this.maxdis_amount = "";
      this.maxdis_disable = false;
    }else{
      this.maxdis_amount = "";
      this.maxdis_disable = true;
    }
  }
  ondayschanged(val){
    if(this.daysSelected == "WeekEnds"){
      this.monday = false;        this.mon_disable = true;           
      this.tuesday = false;       this.tue_disable = true;     
      this.wednesday = false;     this.wed_disable = true;        
      this.thursday = false;      this.thur_disable = true;        
      this.friday = false;        this.fri_disable = true;      
      this.saturday = true;       this.sat_disable = true;
      this.sunday = true;         this.sun_disable = true;
    }else if(this.daysSelected == "WeekDays"){
      this.monday = true;         this.mon_disable = true;   
      this.tuesday = true;        this.tue_disable = true;     
      this.wednesday = true;      this.wed_disable = true;          
      this.thursday = true;       this.thur_disable = true;            
      this.friday = true;         this.fri_disable = true;     
      this.saturday = false;      this.sat_disable = true;     
      this.sunday = false;        this.sun_disable = true;
    }else if(this.daysSelected == "AllDays"){
      this.monday = true;         this.mon_disable = true;      
      this.tuesday = true;        this.tue_disable = true;      
      this.wednesday = true;      this.wed_disable = true;           
      this.thursday = true;       this.thur_disable = true;      
      this.friday = true;         this.fri_disable = true;     
      this.saturday = true;       this.sat_disable = true;    
      this.sunday = true;         this.sun_disable = true;  
    }else if(this.daysSelected == "ParticularDays"){
      this.enable_checkboxes();
    }
  }
  dates : boolean = true;
  times : boolean = true;
  days : boolean = true;
  minbill : boolean = true;
  maxbill : boolean = true;
  selecteddays : string = "";
  onsaveclick(){
    //dates slide
    if(this.dates_slide == true){
      if(this.from_date == null || this.to_date == null){
        this.dates = false;
        alert("Please Enter Dates Or Switch off the Dates Section");
      }else{
        this.from_date = this.datepipe.transform(this.from_date,'yyyy-MM-dd');
        this.to_date = this.datepipe.transform(this.to_date,'yyyy-MM-dd');
        console.log(this.from_date +" "+ this.to_date);
        this.dates = true;
      }
    }else{
      this.dates = true;
      this.from_date = null;
      this.to_date = null;
    }
    //times slide
    if(this.times_slide == true){
      if(this.from_time == null || this.to_time == null){
        this.times = false;
        console.log("Time : "+this.from_time+" "+this.to_time);
        alert("Please Enter Time fields Or Switch off the Time Section");
      }else{
        console.log("Time : "+this.from_time+" "+this.to_time);
        this.times = true;
      }
    }else{
      this.times = true;
      this.from_time = "";
      this.to_time = "";
    }
    //days slide
    if(this.days_slide == true){
      if(this.daysSelected == null){
        this.days = false;
      }else{
        if(this.daysSelected == "WeekEnds"){
          this.selecteddays = "Saturday,Sunday";
        }else if(this.daysSelected == "WeekDays"){
          this.selecteddays = "Monday,Tuesday,Wednesday,Thursday,Friday";
        }else if(this.daysSelected == "AllDays"){
          this.selecteddays = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";
        }else if(this.daysSelected == "ParticularDays"){
          if(this.monday == true){
            this.selecteddays = "Monday,";
          }
          if(this.tuesday == true){
            this.selecteddays += "Tuesday,";
          }
          if(this.wednesday == true){
            this.selecteddays += "Wednesday,";
          }
          if(this.thursday == true){
            this.selecteddays += "Thursday,";
          }
          if(this.friday == true){
            this.selecteddays += "Friday,";
          }
          if(this.saturday == true){
            this.selecteddays += "Saturday,";
          }
          if(this.sunday == true){
            this.selecteddays += "Sunday";
          }
        }
        this.days = true;
      }
    }
    else{
      this.daysSelected = null;
      this.selecteddays = null;
      this.days = true;
    }
    //minbillslide
    if(this.minbill_slide == true){
      if(this.minbill_amount == null){
        this.minbill = false;
        alert("Please Enter Minimum Bill Amount Or Switch off the Min Bill Section");
      }else{
        this.minbill = true;
      }
    }else{
      this.minbill = true;
      this.minbill_amount == "";
    }
    //max discount slide
    if(this.maxdis_slide == true){
      if(this.maxdis_amount == null){
        this.maxbill = false;
        alert("Please Enter Max Discount Amount Or Switch off the Max Discount Section");
      }else{
        this.maxbill = true;
      }
    }else{
      this.maxbill = true;
      this.maxdis_amount == "";
    }
    if(this.promo_name == null || this.promo_code == null || this.percentage == null){
      alert("Please fill all Fields");
    }else{
      if(this.maxbill == false || this.minbill == false || this.dates == false || this.times == false || this.days == false){
      }else{
        alert(this.daysSelected+" "+this.selecteddays);
        if(this.buttoncontent == "Save"){
          let offers : Offers = {
            promo_code_name : this.promo_name,
            promo_code : this.promo_code,
            promo_code_description : '',
            Active_dare_status : this.dates_slide+"",
            from_date : this.from_date+"",
            to_date : this.to_date+"",
            Active_time_status : this.times_slide+"",
            from_time : this.from_time+"",
            to_time : this.to_time+"",
            Day_status : this.days_slide+"",
            Days : this.selecteddays,
            Day_type : this.daysSelected,
            percentage : this.percentage,
            minbill_status : this.minbill_slide+"",
            minbill_amount : this.minbill_amount,
            maximum_bill_status : this.maxdis_slide+"",
            maximum_bill_amount : this.maxdis_amount,
            restaurent_id : 1,
          }
          this.service.AddOffer(offers).subscribe(data=>{
            if(data.code == 200){
              alert(data.message);
              this.onclearclick();
              this.LoadingList();
            }else{
              alert(data.message);
            }
          });
        }else if(this.buttoncontent == "Update"){
          let offerup : OfferUp = {
            offers_id : this.off_id,
            promo_code_name : this.promo_name,
            promo_code : this.promo_code,
            promo_code_description : "",
            Active_dare_status : this.dates_slide+"",
            from_date : this.from_date+"",
            to_date : this.to_date+"",
            Active_time_status : this.times_slide+"",
            from_time : this.from_time+"",
            to_time : this.to_time+"",
            Day_status : this.days_slide+"",
            Days : this.selecteddays,
            Day_type : this.daysSelected,
            percentage : this.percentage,
            minbill_status : this.minbill_slide+"",
            minbill_amount : this.minbill_amount,
            maximum_bill_status : this.maxdis_slide+"",
            maximum_bill_amount : this.maxdis_amount,
            restaurent_id : 1,
          }
          this.service.UpdateOffers(offerup).subscribe(data=>{
            if(data.code == 200){
              alert(data.message);
              this.onclearclick();
              this.LoadingList();
            }else{
              alert(data.message);
            }
          });
        }
      }
    }
  }
  onclearclick(){
    this.dates_slide = false;
    this.onDatesValid();
    this.times_slide = false;
    this.onTimesValid();
    this.days_slide = false;
    this.onDaysValid();
    this.maxdis_slide = false;
    this.onMaxDisValid();
    this.minbill_slide = false;
    this.onMinBillValid();
    this.buttoncontent = "Save";
  }
  public enable_checkboxes(){
    this.monday = false;
    this.tuesday = false;
    this.wednesday = false;
    this.thursday = false;
    this.friday = false;
    this.saturday = false;
    this.sunday = false;
    this.mon_disable = false;
    this.tue_disable = false;
    this.wed_disable = false;
    this.thur_disable = false;
    this.fri_disable = false;
    this.sat_disable = false;
    this.sun_disable = false;
  }
  public disablecheckbox(){
    this.monday = false;
    this.tuesday = false;
    this.wednesday = false;
    this.thursday = false;
    this.friday = false;
    this.saturday = false;
    this.sunday = false;
    this.mon_disable = true;
    this.tue_disable = true;
    this.wed_disable = true;
    this.thur_disable = true;
    this.fri_disable = true;
    this.sat_disable = true;
    this.sun_disable = true;
  }
  public OnlydisableCheckbox(){
    this.mon_disable = true;
    this.tue_disable = true;
    this.wed_disable = true;
    this.thur_disable = true;
    this.fri_disable = true;
    this.sat_disable = true;
    this.sun_disable = true;
  }
  public OnlyenableCheckbox(){

  }
  public LoadingList(){
    this.service.OffersList(1).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  off_id : number;
  public RowSelected(i: number, offers_id: number, promo_code_name: string, promo_code: string, percentage : string, from_date : string,to_date : string,from_time : string,to_time : string, Active_dare_status : string, Active_time_status : string, minbill_status : string, maximum_bill_status : string, Day_status : string, Day_type : string, Days : string,minbill_amount : string,maximum_bill_amount : string) {
    this.buttoncontent = "Update";
    this.off_id = offers_id;
    this.promo_name = promo_code_name;
    this.promo_code = promo_code;
    this.percentage = percentage;
    if(Active_dare_status == "true"){
      //Date Elements
      this.dates_slide = true;
      this.from_date = from_date;
      this.to_date = to_date;
      this.to_date_disable = false;
      this.from_date_disable = false;

      //Day Elements
      this.days_slide = false;
      this.daysSelected = null;
      this.daysSelected_disable = true;
      this.disablecheckbox();
    }else if(Day_status == "true"){
      //Date Elements
      this.dates_slide = false;
      this.from_date = null;
      this.to_date = null;
      this.to_date_disable = true;
      this.from_date_disable = true;

      //Day Elements
      this.days_slide = true;
      this.daysSelected = Day_type;
      this.daysSelected_disable = false;
      this.enable_checkboxes();
      var splittedDays = Days.split(",",7);
      if(Day_type == "WeekEnds"){
        this.monday = false;
        this.tuesday = false;
        this.wednesday = false;
        this.thursday = false;
        this.friday = false;
        this.saturday = true;
        this.sunday = true;
        this.OnlydisableCheckbox();
      }else if(Day_type == "WeekDays"){
        this.monday = true;
        this.tuesday = true;
        this.wednesday = true;
        this.thursday = true;
        this.friday = true;
        this.saturday = false;
        this.sunday = false;
        this.OnlydisableCheckbox();
      }else if(Day_type == "AllDays"){
        this.monday = true;
        this.tuesday = true;
        this.wednesday = true;
        this.thursday = true;
        this.friday = true;
        this.saturday = true;
        this.sunday = true;
        this.OnlydisableCheckbox();
      }else if(Day_type == "ParticularDays"){
        this.OnlyenableCheckbox();
        if(splittedDays.includes('Monday')){
          this.monday = true;
        }else{
          this.monday = false;
        }
        if(splittedDays.includes('Tuesday')){
          this.tuesday = true;
        }else{
          this.tuesday = false;
        }
        if(splittedDays.includes('Wednesday')){
          this.wednesday = true;
        }else{
          this.wednesday = false;
        }
        if(splittedDays.includes('Thursday')){
          this.thursday = true;
        }else{
          this.thursday = false;
        }
        if(splittedDays.includes('Friday')){
          this.friday = true;
        }else{
          this.friday = false;
        }
        if(splittedDays.includes('Saturday')){
          this.saturday = true;
        }else{
          this.saturday = false;
        }
        if(splittedDays.includes('Sunday')){
          this.sunday = true;
        }else{
          this.sunday = false;
        }
      }
    }
    if(Active_time_status == "true"){
      this.times_slide = true;
      this.from_time = from_time;
      this.to_time = to_time;
      this.to_time_disable = false;
      this.from_time_disable = false;
    }else{
      this.times_slide = false;
      this.from_time = null;
      this.to_time = null;
      this.to_time_disable = true;
      this.from_time_disable = true;
    }
    if(minbill_status == "true"){
      this.minbill_slide = true;
      this.minbill_amount = minbill_amount;
      this.minbill_disable = false;
    }else{
      this.minbill_slide = false;
      this.minbill_amount = "";
      this.minbill_disable = true;
    }
    if(maximum_bill_status == "true"){
      this.maxdis_slide = true;
      this.maxdis_amount = maximum_bill_amount;
      this.maxdis_disable = false;
    }else{
      this.maxdis_slide = false;
      this.maxdis_amount = "";
      this.maxdis_disable = true;
    }
  }
}
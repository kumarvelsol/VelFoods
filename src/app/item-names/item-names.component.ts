import { Component, OnInit } from '@angular/core';
import { ItemcategoryServiceService } from '../itemcategory-service.service';
import { NgForm } from '@angular/forms';



const ELEMENT_DATA: PeriodicElements[] = [
  {position: 1, name: 'Non-veg', weight: "Employee 1", DineINN:"100",Tax:"5",TakeAway:"100", Tax1:"6",HomeDelivery:"100",Tax2:"7",DeliveryCharge:"100",symbol: 'Active'},
  {position: 2, name: 'veg', weight: "Employee 2", DineINN:"100",Tax:"5",TakeAway:"100", Tax1:"6",HomeDelivery:"100",Tax2:"7",DeliveryCharge:"100",symbol: 'Active'},
  {position: 3, name: 'Non-veg', weight: "Employee 1", DineINN:"100",Tax:"5",TakeAway:"100", Tax1:"6",HomeDelivery:"100",Tax2:"7",DeliveryCharge:"100",symbol: 'Active'},
  {position: 4, name: 'veg', weight: "Employee 2", DineINN:"100",Tax:"5",TakeAway:"100", Tax1:"6",HomeDelivery:"100",Tax2:"7",DeliveryCharge:"100",symbol: 'Active'},
  {position: 5, name: 'veg', weight: "Employee 1", DineINN:"100",Tax:"5",TakeAway:"100", Tax1:"6",HomeDelivery:"100",Tax2:"7",DeliveryCharge:"100",symbol: 'Active'},
];

@Component({
  selector: 'app-item-names',
  templateUrl: './item-names.component.html',
  styleUrls: ['./item-names.component.css']
})
export class ItemNamesComponent implements OnInit 
{
  taxOnAmount:any;
  taxOnTakeAwayAmount:any;
  taxOnHDlryAmount:any;
  selected:any;
  selectedTakeaway:any;
  spinnerDineInn:any;
  dineInnInputss:number;
  takeawayInputss:number;
  selectedDeliveryss:any;
  ss:number;
  homeDeliveryLabel1:number;
  homeDeliveryTax1:number;
  
  addingsss:number;
  
  seasons: string[] = ['Active', 'InActive'];
  constructor(public service:ItemcategoryServiceService) { }

  
  displayedColumns: string[] = ['position', 'name', 'weight','DineINN','Tax','TakeAway','Tax1','HomeDelivery','Tax2','DeliveryCharge', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.resetForm();

  }


  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.service.itemNames={
          category:'',
          name:'',
          description:'',
          reportingName:'',
          activeFrom:'',
          status:''
        }
  }


  onSubmit(ss:NgForm)
  {
    if(ss.value.name=='' || ss.value.category=='' || ss.value.description==''|| ss.value.reportingName ==''||
    ss.value.activeFrom=='')
    {
      alert("all fields are important");
    }
    else
    {
      alert("added succesfully");
      this.service.itemNames.name=null;
      this.service.itemNames.category=null;
      this.service.itemNames.description=null;
      this.service.itemNames.reportingName=null;
      this.service.itemNames.activeFrom=null;
      this.service.itemNames.status=null;      
    }    
  }

  onclearclick()
  {
    this.service.itemNames.category=null;
    this.service.itemNames.description=null;
  }


  onKey(event: any)
  {
    console.log(event.target.value);
  }

  onDineInnLabel(event: any)
  {
    this.dineInnInputss=event.target.value;

    
    
    // this.spinnerDineInn=this.selected;
    // this.selected=''+(event.target.value*this.spinnerDineInn);
  }

  selectOption(value)
  {
    this.selected=Number.parseFloat((this.dineInnInputss*value).toString())+Number.parseInt(this.dineInnInputss.toString());
    this.taxOnAmount=Number.parseFloat((this.dineInnInputss*value).toString());
  }

  onTakeAwayLabel(event:any)
  {
    this.takeawayInputss=event.target.value;
  }
  
  selectTakeAway(value)
  {        
    this.selectedTakeaway=Number.parseFloat((this.takeawayInputss*value).toString())+Number.parseInt(this.takeawayInputss.toString());

    this.taxOnTakeAwayAmount=Number.parseFloat((this.takeawayInputss*value).toString());
  }

  onHDeliveryLabel(event:any)
  {
    this.homeDeliveryLabel1=event.target.value;
  }

  selectHDelivery(value)
  {
    this.homeDeliveryTax1=value;
    this.taxOnHDlryAmount=(this.homeDeliveryLabel1*this.homeDeliveryTax1);        
  }

  onHDeliveryChargeLabel(event:any)
  {         
    this.ss =(this.homeDeliveryLabel1*this.homeDeliveryTax1);
    this.addingsss=Number.parseFloat(this.ss.toString())+Number.parseInt(this.homeDeliveryLabel1.toString());
    this.selectedDeliveryss=Number.parseFloat((this.addingsss).toString())+ Number.parseInt(event.target.value.toString());    
  }

}
export interface PeriodicElements 
{
  name: string;
  position: number;
  weight: string;
  DineINN:string;
  Tax:string;
  Tax1:string;
  Tax2:string;
  TakeAway:string;
  HomeDelivery:string;
  DeliveryCharge:string;
  symbol: string;
 
}

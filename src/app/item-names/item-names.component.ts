import { Component, OnInit } from '@angular/core';
import { ItemcategoryServiceService } from '../itemcategory-service.service';
import { NgForm } from '@angular/forms';
import { PeriodicElement } from '../item-category/item-category.component';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Non-veg', weight: "Employee 1", symbol: 'Active'},
  {position: 2, name: 'fried rice', weight: "Employee 2", symbol: 'InActive'},
  {position: 3, name: 'snacks', weight: "Employee 3", symbol: 'Active'},
  {position: 4, name: 'Rice', weight: "Employee 1", symbol: 'Active'},
  {position: 5, name: 'noodles', weight: "Employee 5", symbol: 'Active'},
];

@Component({
  selector: 'app-item-names',
  templateUrl: './item-names.component.html',
  styleUrls: ['./item-names.component.css']
})
export class ItemNamesComponent implements OnInit {

  seasons: string[] = ['Active', 'InActive'];
  constructor(public service:ItemcategoryServiceService) { }

  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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

      console.log(ss.value);
    }
    
  }

  onclearclick()
  {
    this.service.itemNames.category=null;
    this.service.itemNames.description=null;
  }

}

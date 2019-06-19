import { Component, OnInit } from '@angular/core';
import { ItemcategoryServiceService } from '../itemcategory-service.service';
import { NgForm } from '@angular/forms';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Veg', weight: "Employee 1", symbol: 'Active'},
  {position: 2, name: 'Non-veg', weight: "Employee 2", symbol: 'InActive'},
  {position: 3, name: 'Veg', weight: "Employee 3", symbol: 'Active'},
  {position: 4, name: 'Veg', weight: "Employee 4", symbol: 'Active'},
  {position: 5, name: 'Non-veg', weight: "Employee 5", symbol: 'Active'},
];

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {

  seasons: string[] = ['Active', 'InActive'];
  constructor(public itemService:ItemcategoryServiceService) { }

  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {

    this.resetForm();
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.itemService.itemcategoryRef={
          name:'',
          description:'',
          reportingName:'',
          Active_From:'',
          status:'',
        }
  }

  onSubmit(icats:NgForm)
  {

    if(icats.value.name=='' || icats.value.description =='' || icats.value.reportingName=='' || 
    icats.value.Active_From == '' || icats.value.status=='')
    {    
      alert("All fields are important.")
    }else
    {
      console.log(icats.value);
      this.itemService.itemcategoryRef.name=null;
      this.itemService.itemcategoryRef.description=null;
      this.itemService.itemcategoryRef.reportingName=null;
      this.itemService.itemcategoryRef.Active_From=null;
      this.itemService.itemcategoryRef.status=null;
  
      alert("data Added Succesfully")
    }

 
  }


  onclearclick()
  {
    //for clears the data
    alert("data has been completed");
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
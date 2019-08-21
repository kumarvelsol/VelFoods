import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Responce, JsResponse } from 'src/app/shared/js-response';
import { Tabletransfermodel } from 'src/app/shared/tabletransfermodel';

@Component({
  selector: 'app-tabletransfer',
  templateUrl: './tabletransfer.component.html',
  styleUrls: ['./tabletransfer.component.css']
})
export class TabletransferComponent implements OnInit {
  dataSource;dataSource2;
  displayedColumns: string[] = ["order_id", "order_itemname","order_quantity", "order_rate","order_totalamount"];
  displayedColumns2: string[] = ["order_id", "order_itemname","order_quantity", "order_rate","order_totalamount"];
  vacantlist;occupiedlist;
  order_id:number;order_itemname:string;order_quantity:number;
  order_rate:number;order_totalamount:number;order_tax_amount:number;
  kot_id:number;order_captain:string;jsRes :JsResponse;
  vacanttablen:number;occupiedtablen:number;
  constructor(private service:RestaurantService) { }

  ngOnInit() {
    this.service.gettingoccupiedtables(1,"Orange").subscribe((data : Responce) =>{
      this.occupiedlist = data.Data;
    });
    this.service.gettingvacanttables(1,"Green").subscribe((data : Responce) =>{
      this.vacantlist = data.Data;
    });
  }
  onOccupiedChange()
  {
    this.service.getorderitems(1,this.occupiedtablen).subscribe((data : Responce) =>
      {
        this.order_id = data.Data[0].order_id;
        this.order_itemname = data.Data[0].order_itemname;
        this.order_quantity = data.Data[0].order_quantity;
        this.order_rate = data.Data[0].order_rate;
        this.order_totalamount = data.Data[0].order_totalamount;
        this.dataSource = data.Data; 
      });
  }
  onVacantChange()
  {

  }
  ontransferclick()
  {
    if(this.vacanttablen == null)
    {
      alert("Please select Vacant table");
    }
    else
    {
      this.dataSource2 = this.dataSource;
      this.dataSource = null; 
    }
  }
  onsaveclick()
  {
    let t:Tabletransfermodel =
    {
      table_t_itemname:this.order_itemname,
      table_t_rate:this.order_rate,
      table_t_quantity:this.order_quantity,
      table_t_totalamount:this.order_totalamount,
      kot_id:this.kot_id,
      table_t_captain:this.order_captain,
      table_t_tax_amount:this.order_tax_amount,
      restaurent_id:1,
      itemname_id:this.order_id,
      table_defination_id:this.vacanttablen,
    }
    this.service.transferinsert(t).subscribe((data : JsResponse) => {

      this.jsRes = data;
      if(this.jsRes.code==200)
          {
            alert("Table Transferred Succesfully.!");
          }else{ alert("Failed to transfer data");}
     });
  }
}

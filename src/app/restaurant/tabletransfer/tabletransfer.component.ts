import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Responce, JsResponse } from 'src/app/shared/js-response';
import { Tabletransfermodel } from 'src/app/shared/tabletransfermodel';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

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
  order_id:any[] =[];order_itemname:any[] =[];order_quantity:any[] =[];
  order_rate:any[] =[];order_totalamount:any[] =[];order_tax_amount:any[] =[];
  kot_idd:any[] =[];order_captain:any[] =[];itemname_idd:any[]=[];jsRes :JsResponse;
  vacanttablen:number;occupiedtablen:number;disable:boolean = false;
  constructor(private service:RestaurantService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.restaurent_id = LoginComponent.rid;
    });
   }

  ngOnInit() {
    this.service.gettingoccupiedtables(this.restaurent_id,"Orange").subscribe((data : Responce) =>{
      this.occupiedlist = data.Data;
    });
    this.service.gettingvacanttables(this.restaurent_id,"Green").subscribe((data : Responce) =>{
      this.vacantlist = data.Data;
    });
  }
  onOccupiedChange()
  {
    this.service.getorderitems(this.restaurent_id,this.occupiedtablen).subscribe((data : Responce) =>
      {
        for(let i=0;i<data.Data.length;i++)
        {
          this.order_id.push(data.Data[i].order_id);
          this.order_itemname.push(data.Data[i].order_itemname);
          this.order_quantity.push(data.Data[i].order_quantity);
          this.order_rate.push(data.Data[i].order_rate);
          this.order_totalamount.push(data.Data[i].order_totalamount);
          this.order_tax_amount.push(data.Data[i].order_tax_amount);
          this.kot_idd.push(data.Data[i].kot_id);
          this.order_captain.push(data.Data[i].order_captain);
          this.itemname_idd.push(data.Data[i].itemname_id);
          this.dataSource = data.Data; 
        }
        
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
      this.disable = true; 
    }
  }
  count:number;tid:number;
  table_t_itemname:string;table_t_rate:number;table_t_quantity:number;table_t_totalamount:number;kot_id:number;
  table_t_captain:string;table_t_tax_amount:number;restaurent_id:number;itemname_id:number;table_defination_id:number;
  
  onclear()
  {
    this.dataSource = null;this.dataSource2  = null;this.occupiedtablen = null;this.vacanttablen = null;this.disable = false;
  }
  onsaveclick()
  {
    this.tid = this.vacanttablen;
    this.service.transferinsert(this.restaurent_id,this.occupiedtablen,"Running",this.tid).subscribe((data:JsResponse) =>{
      this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert("Table Transfered Successfully");
          this.onclear();
        }
        else
        {
          alert("Failed to transfer table");
          this.onclear();
        }
    });
    // console.log(this.dataSource2);
    // for(let i=0;i<this.dataSource2.length;i++)
    // {
    //   debugger;
    //   this.table_t_itemname=this.dataSource2[i].order_itemname,
    //   this.table_t_rate=this.dataSource2[i].order_rate,
    //   this.table_t_quantity=this.dataSource2[i].order_quantity,
    //   this.table_t_totalamount=this.dataSource2[i].order_totalamount,
    //   this.kot_id=this.dataSource2[i].kot_id,
    //   this.table_t_captain=this.dataSource2[i].order_captain,
    //   this.table_t_tax_amount=this.dataSource2[i].order_tax_amount,
    //   this.restaurent_id=1,
    //   this.itemname_id=this.dataSource2[i].itemname_id,
    //   this.table_defination_id=this.vacanttablen,
    //   this.service.transferinsert(this.table_t_itemname,this.table_t_rate,this.table_t_quantity,this.table_t_totalamount,this.kot_id,this.table_t_captain,this.table_t_tax_amount,this.restaurent_id,this.itemname_id,this.table_defination_id).subscribe((data : JsResponse) => {
    //     debugger;
    //     this.jsRes = data;
    //     if(this.jsRes.code==200)
    //     {
    //       this.count = i;
    //     }
    //    });
    // }
    // if(this.count == this.count)
    // {
    //   alert("Table Transfered Successfully");
    // }
    // else
    // {
    //   alert("Failed to transfer table");
    // }
  }
}

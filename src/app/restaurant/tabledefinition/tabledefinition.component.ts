import { Component, OnInit } from '@angular/core';

export interface Captain {
  cid: string;
  cname: string;
};
export interface Steward {
  sid: string;
  sname: string;
};

@Component({
  selector: 'app-tabledefinition',
  templateUrl: './tabledefinition.component.html',
  styleUrls: ['./tabledefinition.component.css']
})
export class TabledefinitionComponent implements OnInit {
  cap : Captain[] = [
    {cid : '1',cname:'abc'},
    {cid : '2',cname:'xyz'}
  ];
  ste : Steward[]  = [
    {sid : '1',sname:'aa'},
    {sid : '2',sname:'bb'}
  ]
  rows: Array<{tableid:string,pax:string,reporting:string,status:string,view:string,captain:string,steward:string}> = [];
  buttoncontent : string;abDatasource;
  tableid:string;pax:string;reporting:string;status:string;view:string;captain :string;steward : string;
  displayedColumns: string[] = ['tableid','pax','reporting','status','actions'];
  constructor() { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.rows = [{tableid :"1",pax :"4",reporting :"Anisha",status :"Active",view:"balcony",captain:"Anisha",steward:"aa"},{tableid :"2",pax :"6",reporting :"Anisha",status :"Active",view:"balcony",captain:"Anisha",steward:"aa"}];
    this.abDatasource = this.rows;
  }
  public onSaveclick()
  {
    this.rows.push({tableid:this.tableid, pax:this.pax,reporting:this.reporting,view:this.view,captain:this.captain,steward:this.steward,status:this.status});
    this.abDatasource = this.rows;
    console.log(this.abDatasource);
  }
  public RowSelected(j:number,tableid:string,pax:string,reporting:string,status:string,view:string,captain:string,steward:string)
  {
      this.buttoncontent="Modify";
      this.tableid = tableid;
      this.pax =  pax;
      this.reporting = reporting;
      this.status = status;
      this.view = view;
      this.captain = captain;
      this.steward = steward;
      console.log(this.tableid);console.log(this.pax);
      console.log(this.reporting);console.log(this.status);
  }
}

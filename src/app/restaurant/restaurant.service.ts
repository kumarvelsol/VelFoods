import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Property } from '../shared/property';
import { Tabledefinition } from '../shared/tabledefinition';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  Baseurl = 'http://localhost:57649/';
  constructor(private http:HttpClient) { }
  

  public getproperty()
  {
    return this.http.get(this.Baseurl+"getproperty");
  }
  public createproperty(prpt_in:Property){
      return this.http.post(`${this.Baseurl+"addingproperty"}`,prpt_in);
  }
  public updateproperty(prpt_up: Property){
    return this.http.post(`${this.Baseurl+"updatingproperty"}`,prpt_up);
  }
  public gettabledata()
  {
    return this.http.get(this.Baseurl+"gettabledefinition");
  }
  public createtable(table_in:Tabledefinition){
      return this.http.post(`${this.Baseurl+"tableadding"}`,table_in);
  }
  public updatetable(table_up: Tabledefinition){
    return this.http.post(`${this.Baseurl+"tableupdate"}`,table_up);
  }
}

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Property } from '../shared/property';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  Baseurl = 'http://localhost:57649/';
  constructor(private http:HttpClient) { }
  

  public getproperty(prpt_get : Property)
  {
    return this.http.post(this.Baseurl+"getproperty",prpt_get);
  }
  public createproperty(prpt_in:Property){
      return this.http.post(`${this.Baseurl+"addingproperty"}`,prpt_in);
  }
  public updateproperty(prpt_up: Property){
    return this.http.post(`${this.Baseurl+"updatingproperty"}`,prpt_up);
  }
}

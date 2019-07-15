import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Offers } from '../shared/interfaces/offers';
import { JsResponse, Responce } from '../shared/JsResponse';
import { Property } from '../shared/property';
import { EmployeeCategory, EmployeeRegistration } from '../shared/interfaces/empcate';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  Baseurl = 'http://localhost:57649/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http:HttpClient) { }
  public AddOffer (offer : Offers){
    return this.http.post<JsResponse>(`${this.Baseurl+"OfferAdding"}`,offer);
  }
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
  public addempcate(empcate : EmployeeCategory)
  {
    return this.http.post<JsResponse>(`${this.Baseurl+"empdeptinsert"}`,empcate);
  }
  public updateempcategory(empcate:EmployeeCategory){
    return this.http.post<JsResponse>(`${this.Baseurl+"empdeptupdate"}`,empcate);
  }
  public getempcategory(restaurent_id:number){
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post<Responce>(`${this.Baseurl+"getempdepartments"}`,parms);
  }
  public addempreg(empcate :EmployeeRegistration){
    return this.http.post<JsResponse>(`${this.Baseurl+"empreginsert"}`,empcate);
  }
  public updateempreg(empcate :EmployeeRegistration){
    return this.http.post<JsResponse>(`${this.Baseurl+"empregupdate"}`,empcate);
  }
  public getempreg(restaurent_id:number){
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post<Responce>(`${this.Baseurl+"empregvalues"}`,parms);
  }
}
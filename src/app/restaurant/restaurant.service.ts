import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Offers } from '../shared/interfaces/offers';
import { JsResponse, Responce } from '../shared/JsResponse';
import { Property } from '../shared/property';
import { Tabledefinition } from '../shared/tabledefinition';
import { EmployeeCategory, EmployeeRegistration } from '../shared/interfaces/empcate';
import { Tax } from '../shared/interfaces/tax';

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
  public OffersList (restaurent_id : number){
    let params = new HttpParams();
    params = params.append('restaurent_id', restaurent_id+"");
    return this.http.post<Responce>(`${this.Baseurl+"OffersList"}`,params);
  }
  public getproperty(prpt_get : Property)
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
  public addempcate(empcate : EmployeeCategory)
  {
    return this.http.post<JsResponse>(`${this.Baseurl+"empdeptinsert"}`,empcate);
  }
  public updateempcategory(empcate : EmployeeCategory){
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
  public getempreg(restaurent_id : number){
    let parms = new HttpParams();
    parms = parms.append('restaurent_id', restaurent_id+"")
    return this.http.post<Responce>(`${this.Baseurl+"empregvalues"}`,parms);
  }
  public AddTax(tax : Tax){
    return this.http.post<JsResponse>(`${this.Baseurl+"TaxAdding"}`,tax);
  }
  public UpdateTax(tax_id: number, tax_name : string, tax_percentage : number, tax_Active_from : string, tax_status : string, restaurent_id : number, tax_employeename:string){
    let parms = new HttpParams();
    parms = parms.append('tax_id',tax_id+"");
    parms = parms.append('tax_name',tax_name);
    parms = parms.append('tax_percentage',tax_percentage+"");
    parms = parms.append('tax_Active_from',tax_Active_from);
    parms = parms.append('tax_status',tax_status);
    parms = parms.append('restaurent_id',restaurent_id+"");
    parms = parms.append('tax_employeename',tax_employeename);
    return this.http.post<JsResponse>(`${this.Baseurl+"TaxUpdate"}`,parms);
  }
  public TaxList(restaurent_id : number){
    let parms = new HttpParams();
    parms = parms.append('restaurent_id',restaurent_id+"");
    return this.http.post<Responce>(`${this.Baseurl+"TaxList"}`,parms);
  }
}

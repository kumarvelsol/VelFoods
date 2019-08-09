import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Offers } from '../shared/interfaces/offers';
import { JsResponse, Responce } from '../../app/shared/js-response';
import { Property } from '../shared/property';
import { EmployeeCategory, EmployeeRegistration, itemcategory, itemnames, bank } from '../shared/interfaces/empcate';
import { Tabledefinition } from '../shared/tabledefinition';
import { Tax } from '../shared/interfaces/tax';
import { Tablebooking } from '../shared/tablebooking';
import { Paidouts } from '../shared/paidouts';
import { Miscollection } from '../shared/miscollection';
import { Restaurant } from '../shared/interfaces/restaurant';
import { Managermodel } from '../shared/interfaces/managermodel';
import { Walletsmodel } from '../shared/walletsmodel';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
 // Baseurl = 'http://localhost:57649/';
 Baseurl = 'http://school.edujinni.in/';
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
  public getproperty()
  {
    return this.http.get(`${this.Baseurl+"getproperty"}`);
  }
  public createproperty(prpt_in:Property){
    return this.http.post(`${this.Baseurl+"addproperty"}`,prpt_in);
  }
  public updateproperty(prpt_up: Property){
    return this.http.post(`${this.Baseurl+"updateproperty"}`,prpt_up);
  }
  public gettabledata(restaurent_id:number)
  {
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post(`${this.Baseurl+"gettabledefinition"}`,parms);
  }
  public createtable(table_in:Tabledefinition){
      return this.http.post(`${this.Baseurl+"tableadding"}`,table_in);
  }
  public updatetable(table_up: Tabledefinition){
    return this.http.post(`${this.Baseurl+"tableupdate"}`,table_up);
  }
  public gettablebooking(restaurent_id:number)
  {let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post(`${this.Baseurl+"gettablebooking"}`,parms);
  }
  public createtablebooking(table_in:Tablebooking){
      return this.http.post(`${this.Baseurl+"addtablebooking"}`,table_in);
  }
  public updatetablebooking(table_up: Tablebooking){
    return this.http.post(`${this.Baseurl+"updatetablebooking"}`,table_up);
  }
  public getrestaurent(property_id:number)
  {
    let parms =new HttpParams();
    parms =parms.append('property_id', property_id+"")
    return this.http.post(`${this.Baseurl+"gettingrestaurant"}`,parms);
  }
  public addrestaurant(resadd:Restaurant)
  {
    return this.http.post(`${this.Baseurl+"addingrestaurant"}`,resadd);
  }
  public updaterestaurant(resup:Restaurant)
  {
    return this.http.post(`${this.Baseurl+"updatingrestaurant"}`,resup);
  }
  public getpaidouts(restaurent_id:number)
  {
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post(`${this.Baseurl+"getpaidouts"}`,parms);
  }
  public createpaidouts(table_in:Paidouts){
      return this.http.post(`${this.Baseurl+"addingpaidouts"}`,table_in);
  }
  public updatepaidouts(table_up: Paidouts){
    return this.http.post(`${this.Baseurl+"updatepaidouts"}`,table_up);
  }
  public createmiscollection(table_in:Miscollection){
    return this.http.post(`${this.Baseurl+"addingmiscollection"}`,table_in);
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
  public addempreg(empreg :EmployeeRegistration){
    return this.http.post<JsResponse>(`${this.Baseurl+"empreginsert"}`,empreg);
  }
  public updateempreg(empreg :EmployeeRegistration){
    return this.http.post<JsResponse>(`${this.Baseurl+"empregupdate"}`,empreg);
  }
  public getempreg(restaurent_id : number){
    let parms = new HttpParams();
    parms = parms.append('restaurent_id', restaurent_id+"")
    return this.http.post<Responce>(`${this.Baseurl+"empregvalues"}`,parms);
  }
  public additemca(itemcat :itemcategory){
    return this.http.post<JsResponse>(`${this.Baseurl+"itemcinsert"}`,itemcat);
  }
  public updateitemca(itemcat :itemcategory){
    return this.http.post<JsResponse>(`${this.Baseurl+"itemcatupdate"}`,itemcat);
  }
  public getitemcate(restaurent_id:number){
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post<Responce>(`${this.Baseurl+"getcategories"}`,parms);
  }
  public additemname(itemn:itemnames){
    return this.http.post<JsResponse>(`${this.Baseurl+"itemnameinsert"}`,itemn);
  }
  public updateitemname(itemn:itemnames){
    return this.http.post<JsResponse>(`${this.Baseurl+"itemnameupdate"}`,itemn);
  }
  public getitemnames(restaurent_id:number){
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post<Responce>(`${this.Baseurl+"getitemnames"}`,parms);
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
  public getmanagers(restaurent_id : number)
  {
    let parms = new HttpParams();
    parms = parms.append('restaurent_id',restaurent_id+"");
    return this.http.post(`${this.Baseurl+"gettingmanagers"}`,parms);
  }
  public addmanagers(managerA:Managermodel)
  {
    return this.http.post(`${this.Baseurl+"addingmanager"}`,managerA);
  }
  public updatemanager(managerU:Managermodel)
  {
    return this.http.post(`${this.Baseurl+"updatingmanager"}`,managerU);
  }
  public getbanks (restaurent_id : number){
    let parms = new HttpParams();
    parms = parms.append('restaurent_id',restaurent_id+"");
    return this.http.post<Responce>(`${this.Baseurl+"getbanks"}`,parms);
  }
  public addbank (banks :bank){
    return this.http.post<JsResponse>(`${this.Baseurl+"addbanks"}`,banks);
  }
  public updatebank(banks :bank){
    return this.http.post<JsResponse>(`${this.Baseurl+"updatebanks"}`,banks);
  }
    public getorders(restaurent_id:number)
  {
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post(`${this.Baseurl+"Getorders"}`,parms);
  }
  public getgetwallets(restaurent_id:number)
  {
    let parms =new HttpParams();
    parms =parms.append('restaurent_id', restaurent_id+"")
    return this.http.post(`${this.Baseurl+"getwallets"}`,parms);
  }
  public addwallets(walletI:Walletsmodel)
  {
    return this.http.post(`${this.Baseurl+"walletadding"}`,walletI);
  }
  public updatewallets(walletU:Walletsmodel)
  {
    return this.http.post(`${this.Baseurl+"walletupdate"}`,walletU);
  }
 }
}

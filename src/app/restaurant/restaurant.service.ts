import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Offers } from '../shared/interfaces/offers';
import { JsResponse } from '../shared/JsResponse';
import { Property } from '../shared/property';

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
}

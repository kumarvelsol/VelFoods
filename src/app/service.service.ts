import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ order} from './Model/ordermodel'

@Injectable({
  providedIn: 'root'
})
 export class ServiceService {
 Baseurl='http://veledu.edujinni.in/';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  constructor(private http:HttpClient) { }
   roomno(){  
     return this.http.get<order>(this.Baseurl+"getdetails");
   }
   }


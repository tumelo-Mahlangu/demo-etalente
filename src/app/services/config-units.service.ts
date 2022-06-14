import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUnit } from '../components/sidebar/_mockData';

@Injectable({
  providedIn: 'root'
})
export class ConfigUnitsService {

  constructor(private httpClient : HttpClient) { }
  url : string = "http://localhost:3000/business_units";

  insertUnits(nameOfUnit : BusinessUnit) : Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(nameOfUnit);
    return this.httpClient.post(this.url , body , {'headers': headers})
  }

  getUnits(): Observable<BusinessUnit[]>{
    return this.httpClient.get<BusinessUnit[]>(this.url);
  }

  removeUnits(idOfDeletedItem : number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${idOfDeletedItem}`);
  }
  updateUnits(idOfUpdatedItem: number, valueToBeUpdated: string) : Observable<any>{
    return this.httpClient.put(`${this.url}/${idOfUpdatedItem}`, valueToBeUpdated);
  }
}

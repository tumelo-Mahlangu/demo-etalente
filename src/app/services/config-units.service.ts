import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigUnitsService {

  constructor(private httpClient : HttpClient) { }
  url : string = "http://localhost:3000/business_units";

  insertBusinessUnits(name : string){
    return this.httpClient.post<any>(this.url, {
      name: name
    })
    .pipe(map((response: any)=>{
      return response
    }))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from './../environments/environment'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  apiEndPoint : string = '';
  constructor(private http:HttpClient) {
     
   this.apiEndPoint = environment.serverApiEndPoint;
    
  }

  getItemDetails(filterCatObject:any){
    let httpParams = new HttpParams();
    Object.keys(filterCatObject).forEach((key:any)=>{
      if(filterCatObject[key]){
        httpParams = httpParams.append(key,filterCatObject[key])
      }
    })
    let httpHeaders = new HttpHeaders();
    const httpOptions = {
       headers : httpHeaders,
       params : httpParams
    }  
    return this.http.get(this.apiEndPoint,httpOptions).pipe(
      map(res=>{
        return res
      }),
      catchError (err=>{
        return err
      })
   )
  }
}

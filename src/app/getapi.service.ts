import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  
  public sdata:any;
  constructor(private http: HttpClient) { }

  ApiUrl1: string = `https://jsonplaceholder.typicode.com/posts`;
  GetApiData(){
    return this.http.get(this.ApiUrl1);
  }
  GetId(id){
    const ApiUrlId = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    return this.sdata = this.http.get(ApiUrlId);
  }
}

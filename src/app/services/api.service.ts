import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private BASE_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  public findAll(resource: string){
    return this.httpClient.get(this.BASE_URL+resource);
  }

  public findOne(resource:string,id: string){
    return this.httpClient.get(`${this.BASE_URL}${resource}/${id}`);
  }

    // public update(resource:string,id: string){
  //   return this.httpClient.patch(`${this.BASE_URL}${resource}/${id}`);
  // }

  public deleteOne(resource:string,id: string){
    return this.httpClient.delete(`${this.BASE_URL}${resource}/${id}`);
  }

}

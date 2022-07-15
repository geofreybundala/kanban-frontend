import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private BASE_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
   fakeData: {name: string}[] = [{name: 'Backlog'}, {name: 'Develop'}, {name: 'Staging'},{name: 'Production'}, {name: 'Done'}, {name: 'Done'}]

  public findAll(resource: string){
    return this.fakeData;
    return [];
    //return this.httpClient.get(this.BASE_URL+resource);
  }

  public create(resource: string, params: any){
    return this.httpClient.post(`${this.BASE_URL}${resource}`,params)
  }

  public findOne(resource:string,id: string){
    return this.httpClient.get(`${this.BASE_URL}${resource}/${id}`);
  }

  //   public update(resource:string,id: string){
  //   return this.httpClient.patch(`${this.BASE_URL}${resource}/${id}`);
  // }

  public deleteOne(resource:string,id: string){
    return this.httpClient.delete(`${this.BASE_URL}${resource}/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private BASE_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  public get(resource: string){
    return this.httpClient.get(this.BASE_URL+resource);
  }

}

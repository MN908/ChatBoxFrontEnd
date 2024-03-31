import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from '../Data/Entities/Sample';
import { environment } from '../Data/Enviroment/enviroment';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  apiUrl: string = environment.apiUrl;
  


  getUser(userName: string, password: string): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${this.apiUrl}/Users/Get?userName=${userName}&password=${password}`)
  }  

  createUser(formData: any): Observable<Sample[]> {
    return this.http.post<Sample[]>(`${this.apiUrl}/Users/Create`, formData);
  }
}

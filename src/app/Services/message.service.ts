import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Data/Enviroment/enviroment';
import { Sample } from '../Data/Entities/Sample';
import { message } from '../Data/Entities/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

 
  constructor(private http:HttpClient) { }
  apiUrl: string = environment.apiUrl;

  getAllUsers(): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${this.apiUrl}/Users/GetAll`)
  }  

  createMessage(messageCreate: any): Observable<message[]> {
    return this.http.post<message[]>(`${this.apiUrl}/Messages/Create`, messageCreate);
  }

  getMessageForUser(senderId: any, receiverId: any): Observable<message[]> {
    return this.http.get<message[]>(`${this.apiUrl}/Messages/Get?senderId=${senderId}&receiverId=${receiverId}`)
  }  
}

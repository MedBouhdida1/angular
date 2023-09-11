import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/Allid'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getOperations(accountNumber: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/operations`, {
      params: { accountNumber }
    });
  }
}
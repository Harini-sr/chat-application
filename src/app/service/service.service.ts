import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return of({
      Id: 1,
      SessionId: 'abc123',
      Message: 'Hello! How can I help you today?',
      Sender: 'Bot',
      Timestamp: '2025-04-24T10:15:30Z'
    });
  }

}

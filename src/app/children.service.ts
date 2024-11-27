import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Child } from './child';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  private baseURL = 'http://localhost:8085/api/v1/children';

  constructor(private httpClient : HttpClient) { }
  getChildren() : Observable<Child[]> {
    return this.httpClient.get<Child[]>(`${this.baseURL}`);
  }
}

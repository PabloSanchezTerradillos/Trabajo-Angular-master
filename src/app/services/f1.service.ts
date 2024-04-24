import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class F1Service {
  constructor(private http: HttpClient) {}

  API_URL: string =
    'https://ergast.com/api/f1/drivers/alonso/results.json?limit=1000';

  getData(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}

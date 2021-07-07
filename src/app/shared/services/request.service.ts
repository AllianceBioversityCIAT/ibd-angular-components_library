import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    public http: HttpClient,
  ) { }

  getUsersExample(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUsersInSubObjectExample(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users`).pipe(map(resp=>{
      return {users:resp};
    }));
  }

}

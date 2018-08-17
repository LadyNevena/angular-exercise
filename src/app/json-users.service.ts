import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonUsersService {

  constructor(private http: HttpClient) {
  	var obj;
   }
   
   public getJSON(): Observable<any> {
        return this.http.get("assets/data/users.json")
    }
}

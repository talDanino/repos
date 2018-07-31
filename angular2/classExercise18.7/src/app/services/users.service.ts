import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    // Returns Observable object:
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
}
}



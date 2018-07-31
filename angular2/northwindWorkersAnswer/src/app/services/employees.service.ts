import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    public constructor(private httpClient: HttpClient) { }

    public getAllEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>("/assets/json/employees.json");
    }
}

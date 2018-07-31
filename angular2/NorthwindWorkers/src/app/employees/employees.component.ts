import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    public employees:Employee[];

  constructor(private httpClient: HttpClient) { }

    // Returns Observable object:
    public getEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>("/assets/json/employees.json");
      }


  ngOnInit() {
        let observable:Observable<Employee[]>=this.getEmployees();
        observable.subscribe((employees) => {
            this.employees=employees;
        });
  }

}

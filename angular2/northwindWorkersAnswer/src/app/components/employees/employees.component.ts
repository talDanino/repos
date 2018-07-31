import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    public employees: Employee[];

    constructor(private employeesService: EmployeesService) { }

    ngOnInit() {
        let observable: Observable<Employee[]>;
        observable = this.employeesService.getAllEmployees();
        observable.subscribe(employees => {
            this.employees = employees;
        });
    }

}

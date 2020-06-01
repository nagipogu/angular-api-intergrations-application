import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeeService } from '../shared/employeee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[];

  constructor(private _employeeServive: EmployeeeService,) { }

  ngOnInit(): void {
    this._employeeServive.getEmployees().subscribe((empList) => {
        this.employees = empList;
        console.log(this.employees)
    })
  }

}

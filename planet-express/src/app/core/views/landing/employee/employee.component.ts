import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeService } from './services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private serviceModel: EmployeeService) {}

  ngOnInit(): void {
    this.serviceModel.getEmployees().subscribe((result) => {
      this.employees = result;
    });
  }
}

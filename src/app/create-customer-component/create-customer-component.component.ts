import { Component, OnInit } from '@angular/core';
import { ItemservicesService } from '../itemservices.service'
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'create',
  templateUrl: './create-customer-component.component.html',
  styleUrls: ['./create-customer-component.component.scss']
})
export class CreateCustomerComponentComponent implements OnInit {
  employee:Employee;
  items;
  baseUrl: string;
  constructor(private _itemServices:ItemservicesService,private route: ActivatedRoute) {
   }


  ngOnInit() {
    
  }

  CreateEmployee(EmployeeName: string,EmployeeEmail: string,EmployeeDepartment: string,EmployeeManager: string,ManagerEmail: string): void
  {
    this.employee= new Employee(EmployeeName,EmployeeEmail,EmployeeDepartment,EmployeeManager,ManagerEmail);

    this._itemServices.CreateEmployee(this.employee);
  }

}

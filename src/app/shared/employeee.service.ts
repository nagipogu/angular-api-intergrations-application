import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Employee } from '../models/employee.model';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeeService {
  baseUrl = 'http://localhost:3000/employees'
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Employee[], any> {
    throw new Error("Method not implemented.");
  }

}

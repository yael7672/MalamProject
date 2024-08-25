import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AppService } from '../app.service';
import { Employee } from '../interfaces/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  myEmployeesArr: any
  ifSortDown: any
  thArrTableMyEmployees: any = ['Name', 'Salary', 'Due-date', 'Age'];
  myEmployeesListKeys: any = ['name', 'salary', 'dueDate', 'age'];
  myEmployeesArrCopy: any
  openSortInputBySalary!:boolean
  openSortInputById!:boolean
  constructor(private router: Router,private appService: AppService) {
  }

  ngOnInit(): void {

  }



  whichSearchTypeOpen(val: any) {
    switch (val) {
      case '0':
        this.openSortInputBySalary = true
        this.openSortInputById = false
        break;
      case '1':
        this.openSortInputBySalary = false
        this.openSortInputById = true
        break;
      default:
        break;
    }
  }





  onSortInputBySalary(val: any) {
    debugger
    this.myEmployeesArr = [...this.myEmployeesArrCopy]
    this.myEmployeesArr = this.myEmployeesArr.filter(
      (item: any) => item.salary <= val.value
    );
  }
  onSortInputById(val: any) {
    debugger
    this.myEmployeesArr = [...this.myEmployeesArrCopy]
    this.myEmployeesArr = this.myEmployeesArr.filter(
      (item: any) => item.id <= val.value
    );
  }


  searchByName(filterKeyByName: any) {
    this.myEmployeesArr = [...this.myEmployeesArrCopy];
    if (filterKeyByName !== "" && filterKeyByName !== null && filterKeyByName !== undefined) {
      this.myEmployeesArr = this.myEmployeesArr.filter((f: Employee) => f.name?.includes(filterKeyByName));
    }
    else {
      if (filterKeyByName == "" || filterKeyByName == null || filterKeyByName !== undefined) {
        this.myEmployeesArr = [...this.myEmployeesArrCopy];
      }
    }
  }


  sortTableDown(thName: any) {
    this.ifSortDown = false;
    let keyToSort: any;
    switch (thName) {
      case 'Name':
        keyToSort = 'name';
        break;
      case 'Salary':
        keyToSort = 'salary';
        break;
      case 'due-date':
        keyToSort = 'dueDate';
        break;
      case 'Age':
        keyToSort = 'age';
        break;
        break;
      default:
        break;
    }
    this.myEmployeesArr?.sort((a: any, b: any) =>
      (keyToSort[1] > (keyToSort[1])) ? 1 : -1)
  }



  sortTableUp(thName: any) {
    this.ifSortDown = true;
    let keyToSort: any;
    switch (thName) {
      case 'Name':
        keyToSort = 'name';
        break;
      case 'Salary':
        keyToSort = 'salary';
        break;
      case 'due-date':
        keyToSort = 'dueDate';
        break;
      case 'Age':
        keyToSort = 'age';
        break;
        break;
      default:
        break;
    }
    this.myEmployeesArr?.sort((a: any, b: any) => {
      const valueA = a[keyToSort];
      const valueB = b[keyToSort];

      // Check if the values are numbers
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB; // Sort numbers in ascending order
      }
      // If not numbers, compare them as strings
      return String(valueA).localeCompare(String(valueB));
    })
  }
}

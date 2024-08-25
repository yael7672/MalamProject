import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpServiceService } from '../pop-up.service';
import { NgForOfContext } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrl: 'delete-employee.component.html'
})
export class DeleteEmployeeComponent implements OnInit {
  isPopUpOpen:any
  constructor(private router: Router,private popUpSerrvice:PopUpServiceService) {
    this.popUpSerrvice.getIsPopUpOpen().subscribe(res => {
      this.isPopUpOpen = res ? res : false;
    })
   }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm): void {
    if (form.valid) {

    } else {
      console.log('Form is invalid');
    }
  }

}
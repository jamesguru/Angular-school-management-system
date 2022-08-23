import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/interfaces/Student';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css'],
})
export class AddstudentsComponent implements OnInit {
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}

  fees: number = 20000;

  noString = false;

  student!: Student;
  name!: string;

  fee!: number;

  balance!: string;

  addStudent() {
    if (this.name && this.fee) {
      
      
     

     

      if (this.fee < this.fees) {
        this.student = {
          name: this.name,

          fee: this.fee,

          balance: 'balance',

          feeBalance:(this.fees-this.fee)
        };

        this.studentsService.addStudents(this.student);

        this.name = '';

        this.fee = 0;

        this.balance = '';
      } else {
        this.student = {
          name: this.name,

          fee: this.fee,

          balance: 'no balance',

          feeBalance:(this.fees - this.fee)
        };

        this.studentsService.addStudents(this.student);

        this.name = '';

        this.fee = 0;

        this.balance = '';
      }
    } else {
      this.noString = true;

      setTimeout(() => {
        this.noString = false;
      }, 2000);
    }
  }
}

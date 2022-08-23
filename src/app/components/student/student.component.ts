import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/interfaces/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() student!:Student;
  

}

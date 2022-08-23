import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';
import { ToggleService } from 'src/app/services/toggle.service';
import { Student } from 'src/interfaces/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students!:Student[];

  

  constructor(private studentsService:StudentsService,private toggle:ToggleService ) { 

    this.students = studentsService.getStudents('all');
    

    
  }

  ngOnInit(): void {
  }


  showStudents(filter:string){



    this.students = this.studentsService.getStudents(filter);


   


  }





}

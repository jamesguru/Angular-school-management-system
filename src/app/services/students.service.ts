import { Injectable } from '@angular/core';
import { Student } from 'src/interfaces/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}



  filteredStudents!:Student[];

  students: Student[] = [
  

    {
      name: 'Valencia Mwangi',
      balance:'no balance',

      fee: 12000,
      feeBalance: 12000
    },

    {
      name: 'Luta Mwangi',
      balance:'balance',

      fee: 12000,

      feeBalance: -8000
    },
  ];

  getStudents(filter:string) {



    if(filter === 'all'){



      return this.students;
    }


    this.filteredStudents = this.students.filter(student => student.balance === filter);


    console.log(this.filteredStudents)
    

    return this.filteredStudents;
  }


  addStudents(student:Student){



    this.students.push(student);

  }
}

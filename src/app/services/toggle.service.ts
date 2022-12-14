import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private showAddTask:boolean = false;

  private subject = new Subject<any>();

  constructor() { }


  toggleLogin():void{

    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);



  }


  onToggle():Observable<any>{

  return this.subject.asObservable(); 
  }



}

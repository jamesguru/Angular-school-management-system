import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  password:string ='swichlanes';

  isLoggedIn= false;




login(email:string,password:string) {


  if(this.password === password){


    this.isLoggedIn = true;

    
  }
  
}


Logout(){

  this.isLoggedIn = false;

  return this.isLoggedIn;
}

}

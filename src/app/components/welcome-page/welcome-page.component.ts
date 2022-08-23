import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {


  showLogin!:boolean;

  wrongPassword:boolean =false;

  none:boolean = false;

  isLoginCorrect!:boolean;

  password!:string;


  email!:string;

  subscription!:Subscription;

  


  constructor(private authService:AuthService, private router:Router,private toggle:ToggleService) {


    this.subscription = this.toggle.onToggle().subscribe((value) => (this.showLogin = value))
   }

  ngOnInit(): void {
  }


 


  login(){


    if(this.email && this.password){

      console.log(this.isLoginCorrect)
      this.authService.login(this.email,this.password);

      this.isLoginCorrect = this.authService.isLoggedIn;


      console.log(this.isLoginCorrect);



      if(this.isLoginCorrect){


        this.showLogin=true;


        this.router.navigate(['students']);

        
  
      }else{


        this.wrongPassword = true;

        setTimeout(() =>{


          this.wrongPassword=false;
  
        },2000)
  
      }


    }else{


      this.none=true;



      setTimeout(() =>{


        this.none=false;

      },2000)


    }
 


  }



}

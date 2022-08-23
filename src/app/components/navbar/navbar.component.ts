import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService, private router:Router ) { }


  @Output() toggle = new EventEmitter();

  loggedIn:boolean = this.authService.isLoggedIn;

  ngOnInit(): void {
  }



  toggleLogin(){

    this.toggle.emit();

  }

  Logout(){

    this.authService.Logout();

    this.router.navigate([''])

  }

}

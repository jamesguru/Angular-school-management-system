import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



title = 'school-management-app';
showLogin!:boolean;




constructor(private toggle:ToggleService){


}




onToggle(){

 this.toggle.toggleLogin();
}


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { CashPipe } from './pipes/cash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    StudentsComponent,
    StudentComponent,
    AddstudentsComponent,
    UppercasePipe,
    TrimPipe,
    CashPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

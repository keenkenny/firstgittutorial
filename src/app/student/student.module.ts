import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';



@NgModule({
  declarations: [
    AddstudentComponent,
    EditstudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }

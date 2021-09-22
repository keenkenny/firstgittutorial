import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template:`
  <div>
    welcome back!
  </div>

  <div *ngIf = "isloggedIn then login else guest">
    Hello,friend.
  </div>
  <ng-template #guest>
    Hello Guest
  </ng-template>

  <ng-template #login>
    Hello My friend
  </ng-template>

  <ul>
    <li *ngFor = "let person of people;">
      {{person.name}}
    </li>
  <ul>
<table>
  <thead>
    <td>Name</td>
    <td>Age</td>
  </thead>
  <tbody *ngFor ="let person of people;">
    <td>{{person.name}}</td>
    <td>{{person.age}}</td>
  </tbody>
</table>

`,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'About page';
  isloggedIn = true ;

  constructor() { }

  ngOnInit(): void {
  }
  people:any[] =[
    {
      name:"Ade",
      age:13

    },
    {
      name:"James",
      age:12
    },
    {
      name:"Seun",
      age:11
    }
]
}

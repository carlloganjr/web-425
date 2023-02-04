/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 01/31/2023
    Description: Exercise 5.2 - Navigation and Layout.
================================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.2 - Navigation and Layout';
  }
}

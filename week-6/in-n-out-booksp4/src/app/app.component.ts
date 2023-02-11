/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 02/09/2023
    Description: Exercise 6.2 - Output Properties.
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}

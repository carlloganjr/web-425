/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 02/02/2023
    Description: Assignment 5.4 - Dialogs.
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
    this.assignment = 'Assignment 5.4 - Dialogs';
  }
}

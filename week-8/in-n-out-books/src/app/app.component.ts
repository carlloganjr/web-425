/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 02/23/2023
    Description: Assignment 8.2 - Server-side Communications.
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
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}

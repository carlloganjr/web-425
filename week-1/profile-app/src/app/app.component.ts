/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 1/7/2023
    Description: Playing with components.
================================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // removed default and added assignment variable
  assignment: string = 'Assignment 1.5 - Components';
}

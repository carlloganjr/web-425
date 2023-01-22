/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 1/12/2023
    Description: Data Binding.
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
  assignment: string = 'Secure Profile App';
}

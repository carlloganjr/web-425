/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 1/7/2023
    Description: Creating a new Angular application.
================================================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = 'You are now in Logan\'s world!';
}

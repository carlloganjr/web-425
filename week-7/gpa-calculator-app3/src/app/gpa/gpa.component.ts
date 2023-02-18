/*
================================================================
    Title: gpa.component.ts
    Author: Carl Logan
    Date: 02/11/2023
    Description: Assignment 6.4 - Input Properties.
================================================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}

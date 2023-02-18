/*
================================================================
    Title: base-layout.component.ts
    Author: Carl Logan
    Date: 02/17/2023
    Description: Exercise 7.2 - Reactive Forms.
================================================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  signOut() {
    this.cookieService.deleteAll();

    this.router.navigate(['/session/sign-in']);
  }

  ngOnInit(): void {
  }

}
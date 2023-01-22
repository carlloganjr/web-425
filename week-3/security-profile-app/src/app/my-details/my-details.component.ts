/*
================================================================
    Title: my-details.component.ts
    Author: Carl Logan
    Date: 1/15/2023
    Description: Data Binding.
================================================================
*/
import { Component, OnInit } from '@angular/core';

// class for creating the Person object
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWIthAngular", "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person

  //initialized using the Person class
  constructor() {
    this.myProfile = new Person("Carl Logan", "Chicken Fried Steak", "Teal");
  }

  ngOnInit(): void {
  }

}

/*
================================================================
    Title: person.class.ts
    Author: Carl Logan
    Date: 1/7/2023
    Description: Learning TypeScript.
================================================================
*/

// import the IPerson interface
import { IPerson }  from "./person.interface";

// Person class implements the IPerson interface
class Person implements IPerson {
  firstName: string;
  lastName: string;

  // setup the object initiation
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// create a new instance of the Person class
let myName = new Person("Carl", "Logan");

// log an outcome to the console
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
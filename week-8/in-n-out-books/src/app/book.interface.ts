/*
================================================================
    Title: book.interface.ts
    Author: Carl Logan
    Date: 02/01/2023
    Description: Exercise 5.3 - Data Tables.
================================================================
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string,
  numOfPages: number;
}

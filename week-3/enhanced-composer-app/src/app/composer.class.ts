/*
================================================================
    Title: composer.class.ts
    Author: Carl Logan
    Date: 1/21/2023
    Description: Passing Data to Routes, Part 1.
================================================================
*/

import { IComposer } from "./composer.interface";

// class for creating a new composer object
export class Composer {
  composers: Array<IComposer>;

  // for initialization
  constructor() {
    this.composers = [
      {composerId: 1001, fullName: "Wolfgang Mozart", genre: "Classical"},
      {composerId: 1002, fullName: "Johann Bach", genre: "Baroque"},
      {composerId: 1003, fullName: "Ludwig van Beethoven", genre: "Romantic"},
      {composerId: 1004, fullName: "Igor Stravinsky", genre: "Ballet"},
      {composerId: 1005, fullName: "Johann Strauss II", genre: "Waltz"},
    ]

  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if(composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

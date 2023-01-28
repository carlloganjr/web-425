/*
================================================================
    Title: composer.service.ts
    Author: Carl Logan
    Date: 01/27/2023
    Description: Inversion of control and dependency injection.
================================================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

// class for creating a new composer object
export class ComposerService {
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



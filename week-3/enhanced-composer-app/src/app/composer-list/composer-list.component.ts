/*
================================================================
    Title: composer-list.component.ts
    Author: Carl Logan
    Date: 1/21/2023
    Description: Passing Data to Routes, Part 1.
================================================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  // an array of composer information
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}

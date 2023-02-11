/*
================================================================
    Title: wishlist-create.component.ts
    Author: Carl Logan
    Date: 02/09/2023
    Description: Exercise 6.2 - Output Properties.
================================================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})

export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  wishlistItem: IWishlistItem;

  constructor() {
    this.wishlistItem = {} as IWishlistItem;
   }

  addItem() {
    this.addItemEmitter.emit({
      title: this.wishlistItem.title,
      authors: this.wishlistItem.authors,
    });
    this.wishlistItem = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

}

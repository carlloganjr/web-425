/*
================================================================
    Title: app-routing.ts
    Author: Carl Logan
    Date: 1/21/2023
    Description: Passing Data to Routes, Part 2.
================================================================
*/

import { Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";

export const AppRoutes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent}
];

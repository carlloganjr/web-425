/*
================================================================
    Title: app-routing.ts
    Author: Carl Logan
    Date: 1/21/2023
    Description: Guarding Routes.
================================================================
*/

import { Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";
import { SignInGuard } from "./sign-in.guard";

export const AppRoutes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent, canActivate: [SignInGuard]},

];

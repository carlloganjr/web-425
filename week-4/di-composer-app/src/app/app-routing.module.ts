/*
================================================================
    Title: app-routing.module.ts
    Author: Carl Logan
    Date: 1/21/2023
    Description: Passing Data to Routes, Part 1.
================================================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// routing for the separate pages
const routes: Routes = [
  {path: 'composer-list', component: ComposerListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'composer-details/:composerId', component: ComposerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

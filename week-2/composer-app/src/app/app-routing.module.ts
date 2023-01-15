/*
================================================================
    Title: app-routing.module.ts
    Author: Carl Logan
    Date: 1/15/2023
    Description: Routing in Action.
================================================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// routing for the separate pages
const routes: Routes = [
  {path: 'composer-list', component: ComposerListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

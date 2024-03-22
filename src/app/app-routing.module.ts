import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './components/item-details/item-details.component';


export const routes: Routes = [
  {component:HomeComponent,path:""},
  {component:ItemDetailsComponent,path:"details/:id"},
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
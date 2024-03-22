import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgModule } from '@angular/core';
import { FilterPostsPipe } from './app/shared/pipes/filterPostsPipe';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

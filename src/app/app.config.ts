import { ApplicationConfig, NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FilterPostsPipe } from './shared/pipes/filterPostsPipe';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};


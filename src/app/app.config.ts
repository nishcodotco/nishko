import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing, withHashLocation } from '@angular/router';
import { APP_BASE_HREF, PathLocationStrategy } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ROUTING STRATEGY
    provideRouter(routes, withDebugTracing()),
    // provideRouter(routes, withHashLocation()),  // For # based routing
    // { provide: APP_BASE_HREF, useValue: '/my/app/' }, // For custom base path
  ]
};

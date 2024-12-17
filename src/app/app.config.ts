/*
  PROVIDE ROUTE PROPERTIES
  
  PROPERTIES                      TYPE        DETAIL
  withComponentInputBinding()     function    for receiving data in the component after changing the route.
  withDebugTracing()              function    for putting traces in the console while changing the route.
  withHashLocation()              function    for buildling a hash based route, the default is PathBasedRouting
  APP_BASE_HREF                   provider    for custome base path
*/


import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};

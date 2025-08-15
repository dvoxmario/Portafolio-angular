import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // importProvidersFrom(RecaptchaV3Module),
    // {
    //   provide: RECAPTCHA_V3_SITE_KEY,
    //   useValue: '6LeRH5wrAAAAAIWpIs77QLXbGIFYIY86l5mNCOjT' 
    // }
  ]
};

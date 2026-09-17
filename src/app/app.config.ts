import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MarketRepository, MockMarketRepository } from './core/data/market.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    MockMarketRepository,
    { provide: MarketRepository, useExisting: MockMarketRepository },
  ]
};

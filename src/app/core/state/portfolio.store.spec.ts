import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MarketRepository } from '../data/market.repository';
import { PortfolioStore } from './portfolio.store';

describe('PortfolioStore', () => {
  it('calculates the consolidated profit from positions', () => {
    TestBed.configureTestingModule({ providers: [PortfolioStore, { provide: MarketRepository, useValue: { getSummary: () => of(null), getPositions: () => of([]), getWatchlist: () => of([]), submitOrder: () => of(null) } }] });
    const store = TestBed.inject(PortfolioStore);
    store.positions.set([{ ticker: 'TEST3', name: 'Teste', sector: 'Tech', price: 12, change: 1, volume: '1 mi', sparkline: [], quantity: 100, averagePrice: 10 }]);
    expect(store.totalProfit()).toBe(200);
  });
});

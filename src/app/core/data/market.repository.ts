import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AssetQuote, Order, OrderRequest, PortfolioSummary, Position } from '../models/market.models';

export abstract class MarketRepository {
  abstract getSummary(): Observable<PortfolioSummary>;
  abstract getPositions(): Observable<readonly Position[]>;
  abstract getWatchlist(): Observable<readonly AssetQuote[]>;
  abstract submitOrder(order: OrderRequest): Observable<Order>;
}

const SPARKS = { up: [32,35,33,39,41,38,45,46,51,49,57,61], down: [59,54,56,50,52,47,49,43,45,39,42,36], soft: [41,43,40,44,46,45,49,47,50,52,51,55] } as const;

@Injectable({ providedIn: 'root' })
export class MockMarketRepository implements MarketRepository {
  readonly orders = signal<readonly Order[]>([]);
  getSummary() { return of({ equity: 184760.42, invested: 147320.18, available: 37440.24, dayResult: 2384.61, dayChange: 1.31, history: [112,114,113,117,116,121,125,123,128,130,127,134,137,139,144,142,148,151,153,158,161,159,165,169,172,176,174,181] }).pipe(delay(280)); }
  getPositions() { return of<readonly Position[]>([
    { ticker: 'PETR4', name: 'Petrobras PN', sector: 'Petróleo e Gás', price: 39.48, change: 2.14, volume: 'R$ 1,2 bi', quantity: 800, averagePrice: 34.12, sparkline: SPARKS.up },
    { ticker: 'VALE3', name: 'Vale ON', sector: 'Mineração', price: 62.37, change: -0.82, volume: 'R$ 982 mi', quantity: 420, averagePrice: 65.20, sparkline: SPARKS.down },
    { ticker: 'ITUB4', name: 'Itaú Unibanco PN', sector: 'Financeiro', price: 38.95, change: 1.06, volume: 'R$ 741 mi', quantity: 900, averagePrice: 33.78, sparkline: SPARKS.soft },
    { ticker: 'WEGE3', name: 'WEG ON', sector: 'Bens industriais', price: 51.72, change: 0.47, volume: 'R$ 318 mi', quantity: 350, averagePrice: 42.61, sparkline: SPARKS.up },
  ]).pipe(delay(360)); }
  getWatchlist() { return of<readonly AssetQuote[]>([
    { ticker: 'BOVA11', name: 'iShares Ibovespa', sector: 'ETF', price: 128.76, change: 0.91, volume: 'R$ 862 mi', sparkline: SPARKS.up },
    { ticker: 'BBAS3', name: 'Banco do Brasil', sector: 'Financeiro', price: 27.84, change: 1.42, volume: 'R$ 429 mi', sparkline: SPARKS.soft },
    { ticker: 'MGLU3', name: 'Magazine Luiza', sector: 'Varejo', price: 9.63, change: -2.31, volume: 'R$ 187 mi', sparkline: SPARKS.down },
  ]).pipe(delay(420)); }
  submitOrder(request: OrderRequest) { const order: Order = { ...request, id: crypto.randomUUID(), status: 'executed', createdAt: new Date() }; this.orders.update(current => [order, ...current]); return of(order).pipe(delay(650)); }
}

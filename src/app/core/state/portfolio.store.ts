import { computed, inject, Injectable, signal } from '@angular/core';
import { forkJoin, finalize } from 'rxjs';
import { MarketRepository } from '../data/market.repository';
import { AssetQuote, OrderRequest, PortfolioSummary, Position } from '../models/market.models';

@Injectable({ providedIn: 'root' })
export class PortfolioStore {
  private readonly repository = inject(MarketRepository);
  readonly summary = signal<PortfolioSummary | null>(null);
  readonly positions = signal<readonly Position[]>([]);
  readonly watchlist = signal<readonly AssetQuote[]>([]);
  readonly loading = signal(true);
  readonly orderPending = signal(false);
  readonly toast = signal('');
  readonly totalProfit = computed(() => this.positions().reduce((sum, item) => sum + (item.price - item.averagePrice) * item.quantity, 0));
  load() { this.loading.set(true); forkJoin({ summary: this.repository.getSummary(), positions: this.repository.getPositions(), watchlist: this.repository.getWatchlist() }).pipe(finalize(() => this.loading.set(false))).subscribe(data => { this.summary.set(data.summary); this.positions.set(data.positions); this.watchlist.set(data.watchlist); }); }
  submitOrder(request: OrderRequest) { this.orderPending.set(true); this.repository.submitOrder(request).pipe(finalize(() => this.orderPending.set(false))).subscribe(order => { this.toast.set(`Ordem de ${order.side === 'buy' ? 'compra' : 'venda'} de ${order.ticker} executada.`); setTimeout(() => this.toast.set(''), 3500); }); }
}

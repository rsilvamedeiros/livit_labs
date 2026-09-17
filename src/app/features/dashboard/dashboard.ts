import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioStore } from '../../core/state/portfolio.store';
import { Sparkline } from '../../shared/sparkline/sparkline';

@Component({ selector: 'app-dashboard', imports: [CurrencyPipe, DecimalPipe, PercentPipe, ReactiveFormsModule, Sparkline], templateUrl: './dashboard.html', styleUrl: './dashboard.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class Dashboard implements OnInit {
  readonly store = inject(PortfolioStore); readonly activeRange = signal('1M'); readonly selectedTicker = signal('PETR4');
  readonly orderForm = new FormGroup({ side: new FormControl<'buy' | 'sell'>('buy', { nonNullable: true }), quantity: new FormControl(100, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }), price: new FormControl(39.48, { nonNullable: true, validators: [Validators.required, Validators.min(.01)] }) });
  readonly orderTotal = signal(3948);
  ngOnInit() { this.store.load(); this.orderForm.valueChanges.subscribe(value => this.orderTotal.set((value.quantity ?? 0) * (value.price ?? 0))); }
  selectAsset(ticker: string, price: number) { this.selectedTicker.set(ticker); this.orderForm.controls.price.setValue(price); }
  setSide(side: 'buy' | 'sell') { this.orderForm.controls.side.setValue(side); }
  submit() { if (this.orderForm.invalid) { this.orderForm.markAllAsTouched(); return; } this.store.submitOrder({ ticker: this.selectedTicker(), side: this.orderForm.controls.side.value, quantity: this.orderForm.controls.quantity.value, price: this.orderForm.controls.price.value }); }
}

export interface AssetQuote { readonly ticker: string; readonly name: string; readonly sector: string; readonly price: number; readonly change: number; readonly volume: string; readonly sparkline: readonly number[]; }
export interface Position extends AssetQuote { readonly quantity: number; readonly averagePrice: number; }
export interface PortfolioSummary { readonly equity: number; readonly invested: number; readonly available: number; readonly dayResult: number; readonly dayChange: number; readonly history: readonly number[]; }
export interface OrderRequest { readonly ticker: string; readonly side: 'buy' | 'sell'; readonly quantity: number; readonly price: number; }
export interface Order extends OrderRequest { readonly id: string; readonly status: 'executed'; readonly createdAt: Date; }

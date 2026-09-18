import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideFlaskConical, LucideLeaf, LucidePackageCheck, LucideShieldCheck } from '@lucide/angular';

interface Ingredient { readonly name: string; readonly benefit: string; readonly image: string; }

@Component({ selector: 'app-labs', imports: [RouterLink, LucideLeaf, LucideFlaskConical, LucideShieldCheck, LucidePackageCheck], templateUrl: './labs.html', styleUrl: './labs.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class Labs {
  readonly ingredients: readonly Ingredient[] = [
    { name: 'Chá verde', benefit: 'Energia e disposição para a rotina', image: 'assets/img/vitaminas-215x215.jpg' },
    { name: 'Magnésio', benefit: 'Suporte ao equilíbrio e bem-estar', image: 'assets/img/magnesio-215x215.jpg' },
    { name: 'Hibisco', benefit: 'Leveza para cuidar de si todos os dias', image: 'assets/img/Hibisco-215x215.jpg' },
    { name: 'Goji berry', benefit: 'Ingredientes selecionados com cuidado', image: 'assets/img/Goji-Berries-215x215.jpg' },
  ];
}

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({ selector: 'app-root', imports: [RouterOutlet, RouterLink, RouterLinkActive], templateUrl: './app.html', styleUrl: './app.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class App {
  private readonly router = inject(Router);
  private readonly url = toSignal(this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), map(event => event.urlAfterRedirects)), { initialValue: this.router.url });
  readonly product = computed<'labs' | 'invest' | 'flow'>(() => this.url().startsWith('/invest') ? 'invest' : this.url().startsWith('/flow') ? 'flow' : 'labs');
  readonly productName = computed(() => ({ labs: 'Labs', invest: 'Invest', flow: 'Flow' })[this.product()]);
  readonly tagline = computed(() => ({ labs: 'Bem-estar e tecnologia para escolhas mais inteligentes.', invest: 'Clareza para cuidar do seu patrimônio.', flow: 'Pequenos passos. Uma rotina que evolui com você.' })[this.product()]);
}

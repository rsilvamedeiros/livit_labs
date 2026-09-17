import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({ selector: 'app-root', imports: [RouterOutlet, RouterLink, RouterLinkActive], templateUrl: './app.html', styleUrl: './app.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class App {
  private readonly router = inject(Router);
  private readonly url = toSignal(this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), map(event => event.urlAfterRedirects)), { initialValue: this.router.url });
  readonly product = computed<'institutional' | 'labs' | 'invest' | 'flow'>(() => this.url().startsWith('/labs') ? 'labs' : this.url().startsWith('/invest') ? 'invest' : this.url().startsWith('/flow') ? 'flow' : 'institutional');
  readonly productName = computed(() => ({ institutional: '', labs: 'Labs', invest: 'Invest', flow: 'Flow' })[this.product()]);
  readonly brandAsset = computed(() => ({ institutional: 'assets/brand/livit.svg', labs: 'assets/brand/livit-labs.svg', invest: 'assets/brand/livit-invest.svg', flow: 'assets/brand/livit-flow.svg' })[this.product()]);
  readonly tagline = computed(() => ({ institutional: 'Viva melhor, em todas as áreas.', labs: 'Bem-estar e tecnologia para escolhas mais inteligentes.', invest: 'Clareza para cuidar do seu patrimônio.', flow: 'Pequenos passos. Uma rotina que evolui com você.' })[this.product()]);
}

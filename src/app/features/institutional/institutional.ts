import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({ selector: 'app-institutional', imports: [RouterLink, ReactiveFormsModule], templateUrl: './institutional.html', styleUrl: './institutional.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class Institutional {
  readonly activePath = signal<'labs' | 'invest' | 'flow'>('flow');
  readonly email = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] });
  readonly subscribed = signal(false);

  subscribe() {
    if (this.email.invalid) { this.email.markAsTouched(); return; }
    this.subscribed.set(true);
    this.email.disable();
  }
}

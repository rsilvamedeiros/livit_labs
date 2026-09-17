import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-institutional', imports: [RouterLink], templateUrl: './institutional.html', styleUrl: './institutional.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class Institutional {}

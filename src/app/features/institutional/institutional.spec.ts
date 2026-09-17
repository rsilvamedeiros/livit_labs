import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Institutional } from './institutional';

describe('Institutional', () => {
  beforeEach(async () => TestBed.configureTestingModule({ imports: [Institutional], providers: [provideRouter([])] }).compileComponents());

  it('switches the recommended product path', () => {
    const fixture = TestBed.createComponent(Institutional);
    const component = fixture.componentInstance;
    component.activePath.set('invest');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.path-result').textContent).toContain('LIVIT INVEST');
  });

  it('only accepts a valid newsletter email', () => {
    const component = TestBed.createComponent(Institutional).componentInstance;
    component.email.setValue('email-invalido');
    component.subscribe();
    expect(component.subscribed()).toBe(false);
    component.email.setValue('pessoa@exemplo.com');
    component.subscribe();
    expect(component.subscribed()).toBe(true);
  });
});

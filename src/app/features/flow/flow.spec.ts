import { TestBed } from '@angular/core/testing';
import { Flow } from './flow';

describe('Flow', () => {
  beforeEach(async () => TestBed.configureTestingModule({ imports: [Flow] }).compileComponents());

  it('updates daily progress when a habit is checked', () => {
    const fixture = TestBed.createComponent(Flow);
    const component = fixture.componentInstance;

    expect(component.completed()).toBe(2);
    expect(component.progress()).toBe(50);

    component.toggleHabit(3);

    expect(component.completed()).toBe(3);
    expect(component.progress()).toBe(75);
  });
});

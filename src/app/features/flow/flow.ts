import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Habit { readonly id: number; readonly title: string; readonly category: string; readonly icon: string; readonly time: string; readonly streak: number; readonly done: boolean; readonly color: string; }
interface Goal { readonly title: string; readonly category: string; readonly progress: number; readonly target: string; readonly color: string; }

@Component({ selector: 'app-flow', templateUrl: './flow.html', styleUrl: './flow.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class Flow {
  readonly habits = signal<readonly Habit[]>([
    { id: 1, title: 'Começar o dia com água', category: 'Bem-estar', icon: '◌', time: '08:00', streak: 12, done: true, color: '#6d6af4' },
    { id: 2, title: 'Movimentar o corpo', category: 'Saúde', icon: '↗', time: '12:30', streak: 7, done: true, color: '#ff8a72' },
    { id: 3, title: 'Ler por 20 minutos', category: 'Aprendizado', icon: '◇', time: '19:00', streak: 4, done: false, color: '#40bda3' },
    { id: 4, title: 'Planejar o próximo dia', category: 'Organização', icon: '✓', time: '21:30', streak: 9, done: false, color: '#d6a43a' },
  ]);
  readonly goals: readonly Goal[] = [
    { title: 'Completar 24 treinos', category: 'Movimento', progress: 67, target: '16 de 24', color: '#ff8a72' },
    { title: 'Ler 6 livros', category: 'Aprendizado', progress: 50, target: '3 de 6', color: '#6d6af4' },
    { title: 'Reserva de emergência', category: 'Finanças', progress: 78, target: '78%', color: '#40bda3' },
  ];
  readonly week = [
    { day: 'SEG', date: 14, score: 100 }, { day: 'TER', date: 15, score: 75 }, { day: 'QUA', date: 16, score: 100 }, { day: 'HOJE', date: 17, score: 50 }, { day: 'SEX', date: 18, score: 0 }, { day: 'SÁB', date: 19, score: 0 }, { day: 'DOM', date: 20, score: 0 },
  ] as const;
  readonly completed = computed(() => this.habits().filter(habit => habit.done).length);
  readonly progress = computed(() => Math.round((this.completed() / this.habits().length) * 100));
  readonly greeting = 'Boa tarde, Renan.';
  toggleHabit(id: number) { this.habits.update(habits => habits.map(habit => habit.id === id ? { ...habit, done: !habit.done } : habit)); }
}

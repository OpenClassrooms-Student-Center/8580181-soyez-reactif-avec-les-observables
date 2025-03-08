import { Component } from '@angular/core';
import { interval, take, tap } from 'rxjs';
import { ChapterTitleComponent, ConsoleTipComponent } from '@ui-elements';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-unsubscribe-strategies',
  imports: [
    ConsoleTipComponent,
    ChapterTitleComponent,
    AsyncPipe
  ],
  template: `
    <app-chapter-title>Évitez les fuites de mémoire avec des stratégies de unsubscribe</app-chapter-title>
		<app-console-tip/>
    <p>Stops at 5: {{ stopsAt5$ | async }}</p>
    <p>Stops when component destroyed: {{ stopsOnDestroy$ | async }}</p>
  `,
  styles: ``
})
export class HomeComponent {
  interval$ = interval(1000).pipe(
    tap(console.log)
  );

  stopsAt5$ = interval(1000).pipe(
    take(6)
  );

  stopsOnDestroy$ = this.interval$.pipe(
    takeUntilDestroyed()
  );

  constructor() {
    // this.interval$.subscribe();
  }
}

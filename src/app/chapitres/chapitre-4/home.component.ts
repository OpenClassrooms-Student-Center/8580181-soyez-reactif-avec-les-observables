import { Component } from '@angular/core';
import { interval, map, take, tap } from 'rxjs';
import { ChapterTitleComponent, ConsoleTipComponent } from '@ui-elements';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-unsubscribe-strategies',
  imports: [
    ConsoleTipComponent,
    ChapterTitleComponent,
    AsyncPipe,
  ],
  template: `
    <app-chapter-title>Évitez les fuites de mémoire avec des stratégies de unsubscribe</app-chapter-title>
		<app-console-tip/>
    <p>Multiples of 10: {{ multiplesOfTen$ | async }}</p>
    <p>Stops at 10: {{ twosUpToTen$ | async }}</p>
  `,
  styles: ``
})
export class HomeComponent {
  // interval$ = interval(1000).pipe(
  //   tap(console.log)
  // );
  //
  // stopsAt5$ = this.interval$.pipe(
  //   take(6)
  // ).subscribe();
  //
  // stopsOnDestroy$ = this.interval$.pipe(
  //   takeUntilDestroyed()
  // ).subscribe();

  multiplesOfTen$ = interval(1000).pipe(
    map(value => value * 10)
  );

  twosUpToTen$ = interval(1000).pipe(
    map(value => value * 2),
    take(6)
  );

  hundredsAllTheWay$ = interval(1000).pipe(
    takeUntilDestroyed(),
    tap(console.log)
  ).subscribe();

  constructor() {
    // this.interval$.subscribe();
  }
}

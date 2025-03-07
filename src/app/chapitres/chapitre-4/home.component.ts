import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';
import { ConsoleTipComponent } from '../../ui-elements/console-tip/console-tip.component';
import { ChapterTitleComponent } from '../../ui-elements/chapter-title/chapter-title.component';

@Component({
  selector: 'app-unsubscribe-strategies',
  imports: [
    ConsoleTipComponent,
    ChapterTitleComponent
  ],
  template: `
    <app-chapter-title>Évitez les fuites de mémoire avec des stratégies de unsubscribe</app-chapter-title>
		<app-console-tip/>
  `,
  styles: ``
})
export class HomeComponent {
  interval$ = interval(1000).pipe(
    tap(console.log)
  );

  constructor() {
    // this.interval$.subscribe();
  }
}

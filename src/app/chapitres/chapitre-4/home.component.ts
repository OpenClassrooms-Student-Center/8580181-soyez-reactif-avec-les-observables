import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';
import { ConsoleTipComponent } from '../../shared/console-tip/console-tip.component';

@Component({
  selector: 'app-unsubscribe-strategies',
  imports: [
    ConsoleTipComponent
  ],
  template: `
    <h1 class="text-2xl text-gray-600">Évitez les fuites de mémoire avec des stratégies de unsubscribe</h1>
		<app-console-tip/>
  `,
  styles: ``
})
export class HomeComponent {
  interval$ = interval(1000).pipe(
    tap(console.log)
  );

  constructor() {
    this.interval$.subscribe();
  }
}

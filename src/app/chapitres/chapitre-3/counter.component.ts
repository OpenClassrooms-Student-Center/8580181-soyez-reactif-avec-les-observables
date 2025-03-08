import { Component } from '@angular/core';
import { filter, interval, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [
    AsyncPipe
  ],
  template: `
		<div class="px-4 py-2 border-2 border-orange-300 rounded-2xl shadow-2xl w-fit mt-6 mx-auto">
			<h2 class="text-2xl text-orange-600 font-bold">
				{{ message$ | async }}
			</h2>
		</div>
  `,
  styles: ``
})
export class CounterComponent {
  message$ = interval(1000).pipe(
    filter(value => value % 5 === 0),
    map(value => `Vous êtes connecté·e depuis ${value} secondes.`),
    tap(text => this.logger(text))
  );

  private logger(text: string): void {
    console.log(`LOG: ${text}`);
  }
}

import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [
    AsyncPipe
  ],
  template: `
		<div class="px-4 py-2 border-2 border-orange-300 rounded-2xl shadow-2xl w-fit mt-6 mx-auto">
			<h2 class="text-2xl text-orange-600 font-bold">
				Vous êtes connecté·e depuis {{ interval$ | async }} secondes.
			</h2>
		</div>
  `,
  styles: ``
})
export class CounterComponent {
  interval$ = interval(1000);
}

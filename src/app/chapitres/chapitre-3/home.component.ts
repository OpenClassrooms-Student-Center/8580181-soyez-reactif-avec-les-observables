import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-basic-operators',
  imports: [
    AsyncPipe
  ],
  template: `
		<h1 class="text-2xl text-gray-600">Manipulez les émissions avec les opérateurs bas niveau</h1>
		<p class="text-xl mt-3 text-orange-600 font-bold">{{ interval$ | async }}</p>
  `,
  styles: ``
})
export class HomeComponent {
  interval$ = interval(1000);
}

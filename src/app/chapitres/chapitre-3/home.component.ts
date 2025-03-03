import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ChapterTitleComponent } from '../../shared/chapter-title/chapter-title.component';

@Component({
  selector: 'app-basic-operators',
  imports: [
    AsyncPipe,
    ChapterTitleComponent
  ],
  template: `
    <app-chapter-title>Manipulez les émissions avec les opérateurs bas niveau</app-chapter-title>
		<p class="text-xl mt-3 text-orange-600 font-bold">{{ interval$ | async }}</p>
  `,
  styles: ``
})
export class HomeComponent {
  interval$ = interval(1000);
}

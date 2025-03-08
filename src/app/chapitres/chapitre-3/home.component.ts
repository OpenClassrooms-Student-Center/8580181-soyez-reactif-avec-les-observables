import { Component } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ChapterTitleComponent } from '@ui-elements';

@Component({
  selector: 'app-basic-operators',
  imports: [
    AsyncPipe,
    ChapterTitleComponent
  ],
  template: `
    <app-chapter-title>Manipulez les émissions avec les opérateurs bas niveau</app-chapter-title>
		<p class="text-xl mt-3 text-orange-600 font-bold">
      {{ interval$ | async }}
    </p>
  `,
  styles: ``
})
export class HomeComponent {
  interval$: Observable<string> = interval(1000).pipe(
    filter(value => value % 5 === 0),
    map(value => value % 2 === 0 ?
      `Je suis ${value} et je suis pair` :
      `Je suis ${value} et je suis impair`
    ),
    tap(text => this.logger(text)),
  );

  private logger(text: string): void {
    console.log(`LOG: ${text}`);
  }
}

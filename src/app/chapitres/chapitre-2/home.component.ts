import { Component } from '@angular/core';
import { ChapterTitleComponent, ConsoleTipComponent } from '@ui-elements';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-home',
  imports: [
    ConsoleTipComponent,
    ChapterTitleComponent,
    AsyncPipe,
    CounterComponent
  ],
  template: `
    <app-chapter-title>Créez un Observable et souscrivez-y</app-chapter-title>
    <app-console-tip/>
<!--    <p>{{ interval$ | async }}</p>-->
    <app-counter />
  `,
  styles: ``
})
export class HomeComponent {
  // interval$ = interval(1000);

  // constructor() {
  //   this.interval$.subscribe(value => console.log(value));
  //   setTimeout(() => this.interval$.subscribe(value => console.log(value)), 3000);
  // }
}

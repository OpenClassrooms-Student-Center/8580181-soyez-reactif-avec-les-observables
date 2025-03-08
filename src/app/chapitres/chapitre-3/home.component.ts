import { Component } from '@angular/core';
import { ChapterTitleComponent } from '@ui-elements';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-basic-operators',
  imports: [
    ChapterTitleComponent,
    CounterComponent
  ],
  template: `
    <app-chapter-title>Manipulez les émissions avec les opérateurs bas niveau</app-chapter-title>
		<app-counter/>
  `,
  styles: ``
})
export class HomeComponent {

}

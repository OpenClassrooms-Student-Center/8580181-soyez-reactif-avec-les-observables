import { Component } from '@angular/core';
import { ChapterTitleComponent } from '../../ui-elements/chapter-title/chapter-title.component';

@Component({
  selector: 'app-higher-order-operators',
  imports: [
    ChapterTitleComponent
  ],
  template: `
    <app-chapter-title>Passez d'un Observable à un autre avec les opérateurs haut niveau</app-chapter-title>
  `,
  styles: ``
})
export class HomeComponent {

}

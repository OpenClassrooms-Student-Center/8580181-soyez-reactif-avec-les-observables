import { Component } from '@angular/core';
import { ConsoleTipComponent } from '../../shared/console-tip/console-tip.component';
import { ChapterTitleComponent } from '../../shared/chapter-title/chapter-title.component';

@Component({
  selector: 'app-home',
  imports: [
    ConsoleTipComponent,
    ChapterTitleComponent
  ],
  template: `
    <app-chapter-title>Créez un Observable et souscrivez-y</app-chapter-title>
    <app-console-tip/>
  `,
  styles: ``
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { ChapterTitleComponent, ConsoleTipComponent } from '@ui-elements';

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

import { Component } from '@angular/core';
import { ConsoleTipComponent } from '../../shared/console-tip/console-tip.component';

@Component({
  selector: 'app-home',
  imports: [
    ConsoleTipComponent
  ],
  template: `
    <h1 class="text-2xl text-gray-600">Créez un Observable et souscrivez-y</h1>
    <app-console-tip/>
  `,
  styles: ``
})
export class HomeComponent {

}

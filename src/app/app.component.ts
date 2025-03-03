import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-4xl text-orange-500 text-center my-12">Soyez réactif avec les Observables</h1>
		<router-outlet />`,
  styles: [],
  imports: [
    RouterOutlet
  ]
})
export class AppComponent {
}

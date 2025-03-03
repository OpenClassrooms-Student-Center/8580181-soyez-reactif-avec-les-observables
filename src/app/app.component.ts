import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  template: `
		<div class="max-w-wide mx-auto text-center">
			<h1 class="text-4xl text-orange-500 my-12">Soyez réactif avec les Observables</h1>
			<p>Choisissez un chapitre :</p>
			<router-outlet/>
		</div>
  `
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  template: `
		<div class="mb-6">
			<h1 class="text-4xl text-orange-500 my-12">Soyez réactif avec les Observables</h1>
			<p>Choisissez un chapitre :</p>
			<ul class="list-image-none">
				<li>
					<a routerLink="create-an-observable">
						Créez un Observable et souscrivez-y
					</a>
				</li>
			</ul>
		</div>
  `,
})
export class HeaderComponent {

}

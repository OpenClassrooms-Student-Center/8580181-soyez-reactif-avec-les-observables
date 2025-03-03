import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  template: `
		<header class="mb-6">
			<h1 class="text-4xl text-orange-500 my-12">Soyez réactif avec les Observables</h1>
			<p>Choisissez un chapitre :</p>
			<nav>
				<ul class="list-image-none">
					<li><a routerLink="create-an-observable">Créez un Observable et souscrivez-y</a></li>
					<li><a routerLink="basic-operators">Manipulez les émissions avec les opérateurs bas niveau</a></li>
					<li><a routerLink="unsubscribe-strategies">Évitez les fuites de mémoire avec des stratégies de unsubscribe</a>
					</li>
					<li><a routerLink="higher-order-operators">Passez d'un Observable à un autre avec les opérateurs haut
						niveau</a></li>
				</ul>
			</nav>
		</header>
  `,
})
export class HeaderComponent {

}

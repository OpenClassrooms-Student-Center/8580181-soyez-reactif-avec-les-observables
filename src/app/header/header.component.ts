import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
		<header class="mb-12">
			<h1 class="text-4xl text-orange-500 mt-12 mb-6">Soyez réactif avec les Observables</h1>
			<nav>
				<p class="text-gray-600">Choisissez un chapitre :</p>
				<select class="border-2 border-gray-300 p-1 text-gray-600" [formControl]="routeCtrl">
          <option disabled value="">-- Veuillez sélectionner un chapitre --</option>
					<option value="create-an-observable">Créez un Observable et souscrivez-y</option>
					<option value="basic-operators">Manipulez les émissions avec les opérateurs bas niveau</option>
					<option value="unsubscribe-strategies">Évitez les fuites de mémoire avec des stratégies de unsubscribe
					</option>
					<option value="higher-order-operators">Passez d'un Observable à un autre avec les opérateurs haut niveau
					</option>
				</select>
			</nav>
		</header>
  `,
  imports: [
    ReactiveFormsModule
  ]
})
export class HeaderComponent {
  routeCtrl = new FormControl<string>('');

  private router = inject(Router);

  constructor() {
    this.navigateOnRouteCtrlChange();
  }

  private navigateOnRouteCtrlChange() {
    this.routeCtrl.valueChanges.pipe(
      takeUntilDestroyed(),
      filter(route => route !== null),
      tap(route => this.router.navigateByUrl(route))
    ).subscribe();
  }
}

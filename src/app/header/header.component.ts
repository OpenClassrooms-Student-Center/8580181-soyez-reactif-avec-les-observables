import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, filter, take, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
		<header class="mb-12">
			<h1 class="text-4xl text-orange-500 mt-12 mb-6">Soyez réactif avec les Observables</h1>
			<nav>
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
  routeCtrl: FormControl<string>;

  private router = inject(Router);

  constructor() {
    this.routeCtrl = new FormControl<string>('', { nonNullable: true });
    this.navigateOnRouteCtrlChange();
    this.setCtrlValueOnInitialLoad();
  }

  private setCtrlValueOnInitialLoad() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      take(1),
      delay(0),
      tap(event => {
        this.routeCtrl.setValue(this.routePathFor(event), { emitEvent: false });
      })
    ).subscribe();
  }

  private routePathFor(event: NavigationEnd) {
    return event.url.split('/')[1];
  }

  private navigateOnRouteCtrlChange() {
    this.routeCtrl.valueChanges.pipe(
      takeUntilDestroyed(),
      tap(route => this.router.navigate([route]))
    ).subscribe();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  template: `
		<div class="max-w-wide mx-auto text-center">
			<app-header/>
			<div class="border-2 border-orange-100">
				<router-outlet/>
			</div>
		</div>
  `
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  template: `
		<div class="max-w-wide mx-auto text-center">
			<app-header/>
			<router-outlet/>
		</div>
  `
})
export class AppComponent {
}

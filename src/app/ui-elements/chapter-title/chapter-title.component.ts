import { Component } from '@angular/core';

@Component({
  selector: 'app-chapter-title',
  imports: [],
  template: `
		<h1 class="text-2xl text-gray-600">
      <ng-content/>
    </h1>
  `,
  styles: ``
})
export class ChapterTitleComponent {

}

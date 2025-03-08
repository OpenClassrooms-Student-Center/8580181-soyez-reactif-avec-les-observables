import { Component } from '@angular/core';
import { ChapterTitleComponent } from '@ui-elements';
import { concatMap, exhaustMap, interval, map, mergeMap, Observable, startWith, Subject, switchMap, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

type MappingOperatorName = 'merge' | 'concat' | 'switch' | 'exhaust';

@Component({
  selector: 'app-higher-order-operators',
  imports: [
    ChapterTitleComponent,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
		<app-chapter-title>Passez d'un Observable à un autre avec les opérateurs haut niveau</app-chapter-title>
		<label for="merge" class="block">
			mergeMap
			<input type="radio" id="merge" [formControl]="mappingOperatorCtrl" value="merge">
		</label>
		<label for="concat" class="block">
			concatMap
			<input type="radio" id="concat" [formControl]="mappingOperatorCtrl" value="concat">
		</label>
		<label for="switch" class="block">
			switchMap
			<input type="radio" id="switch" [formControl]="mappingOperatorCtrl" value="switch">
		</label>
		<label for="exhaust" class="block">
			exhaustMap
			<input type="radio" id="exhaust" [formControl]="mappingOperatorCtrl" value="exhaust">
		</label>
		<div class="m-3">
			<button (click)="onSelectColour('red')" class="mx-1">Rouge</button>
			<button (click)="onSelectColour('green')" class="mx-1">Vert</button>
			<button (click)="onSelectColour('blue')" class="mx-1">Bleu</button>
		</div>
		<div class="flex gap-3 w-fit m-auto items-center">
      <div class="w-6 h-6 border-2 border-gray-400" [style.background-color]="selectedColour$ | async"></div>
			<div class="w-48 m-auto h-6 border-2 border-gray-400">
				@if (activeFlow$ | async; as flow) {
					<div class="h-full" [style.width]="flow.value" [style.background-color]="flow.colour"></div>
				}
			</div>
		</div>
  `,
  styles: ``
})
export class HomeComponent {
  mappingOperatorCtrl = new FormControl<MappingOperatorName>('merge', { nonNullable: true });
  selectedColour$ = new Subject<string>();

  private flowObservables: Record<MappingOperatorName, Observable<{ colour: string, value: string }>> = {
    merge: this.selectedColour$.pipe(
      mergeMap(colour => this.generateFlow(colour))
    ),
    concat: this.selectedColour$.pipe(
      concatMap(colour => this.generateFlow(colour))
    ),
    switch: this.selectedColour$.pipe(
      switchMap(colour => this.generateFlow(colour))
    ),
    exhaust: this.selectedColour$.pipe(
      exhaustMap(colour => this.generateFlow(colour))
    )
  };

  activeFlow$: Observable<{ colour: string, value: string }> = this.mappingOperatorCtrl.valueChanges.pipe(
    startWith('merge' as const),
    switchMap(mappingOperator => this.flowObservables[mappingOperator])
  );

  onSelectColour(colour: string): void {
    this.selectedColour$.next(colour);
  }

  private generateFlow(colour: string): Observable<{ colour: string, value: string }> {
    return interval(25).pipe(
      take(101),
      map(value => ({
        colour,
        value: `${value}%`
      }))
    );
  }
}

import { Component } from '@angular/core';
import { ChapterTitleComponent } from '@ui-elements';
import { concatMap, exhaustMap, interval, map, mergeMap, startWith, Subject, switchMap, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MappingOperatorName } from './mapping-operator-name';
import { Flow } from './flow';

@Component({
  selector: 'app-higher-order-operators',
  imports: [
    ChapterTitleComponent,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  mappingOperatorCtrl = new FormControl<MappingOperatorName>('merge', { nonNullable: true });
  selectedColour$ = new Subject<string>();

  private flowObservables: Record<MappingOperatorName, Flow> = {
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

  activeFlow$: Flow = this.mappingOperatorCtrl.valueChanges.pipe(
    startWith('merge' as const),
    switchMap(mappingOperator => this.flowObservables[mappingOperator])
  );

  onSelectColour(colour: string): void {
    this.selectedColour$.next(colour);
  }

  private generateFlow(colour: string): Flow {
    return interval(25).pipe(
      take(101),
      map(value => ({
        colour,
        value: `${value}%`
      }))
    );
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent implements OnInit, OnDestroy {
  // inputValue: string;

  private subscriptions: Subscription = new Subscription();

  public keyUp = new Subject<KeyboardEvent>();

  @Output() searchPhrase = new EventEmitter<string>();

  public ngOnInit(): void {
    this.subscriptions.add(
      this.keyUp.pipe(
        map((event: any) => event.target.value),
        filter((res) => res.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap(search => of(search).pipe(
          delay(500),
        )),
      ).subscribe((value) => {
        this.searchPhrase.emit(value);
      })
    );
}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

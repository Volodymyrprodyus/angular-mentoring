import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthorsService } from 'src/app/core/service/authors.service';
import { ListOption } from 'src/app/models/list-options.model';
import * as authorsActions from './authors.actions';

@Injectable()
export class AuthorsEffects {
  public fetchAuthorsFromApi$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(authorsActions.fetchAuthorsFromApi),
      switchMap(() => this.authorsService.getAuthors()),
      map((data: ListOption[]) =>
        authorsActions.fetchAuthorsSuccess({ authors: data })
      ),
      catchError(() => of(authorsActions.fetchAuthorsError()))
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService,
  ) {}
}

import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { authorsInitialState } from './authors-initial-state';
import { AuthorsState } from './authors.state';
import * as authorsActions from './authors.actions';
import clone from 'clone';
import { ListOption } from 'src/app/models/list-options.model';

const reducer: ActionReducer<AuthorsState> = createReducer(
  authorsInitialState,
  on(
    authorsActions.fetchAuthorsSuccess,
    (
      state: AuthorsState,
      { authors }: { authors: ListOption[] }
    ): AuthorsState => ({
      ...state,
      authors,
      error: null,
    })
  )
);

export function authorsReducer(
  state: AuthorsState | undefined,
  action: Action
): AuthorsState {
  return reducer(state, action);
}

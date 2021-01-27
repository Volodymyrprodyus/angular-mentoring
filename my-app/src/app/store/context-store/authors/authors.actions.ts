import { createAction, props } from '@ngrx/store';
import { ListOption } from 'src/app/models/list-options.model';
import { AuthorsActionTypes } from './authors.action-types';

export const fetchAuthorsFromApi = createAction(AuthorsActionTypes.FetchAuthorsFromApi);
export const fetchAuthorsSuccess = createAction(AuthorsActionTypes.FetchAuthorsSuccess, props<{ authors: ListOption[] }>());
export const fetchAuthorsError = createAction(AuthorsActionTypes.FetchAuthorsError);

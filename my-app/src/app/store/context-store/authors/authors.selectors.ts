import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListOption } from 'src/app/models/list-options.model';
import { ContextState } from '../context.state';
import { FEATURE_NAME } from '../context.store.config';

export const selectFeature = createFeatureSelector<ContextState>(FEATURE_NAME);

export const selectAuthorsList = createSelector(selectFeature, (state: ContextState): ListOption[] => state.authors.authors);

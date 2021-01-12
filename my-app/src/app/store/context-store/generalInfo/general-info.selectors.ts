import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContextState } from '../context.state';
import { FEATURE_NAME } from '../context.store.config';

// ↓ feature selector
export const selectFeature = createFeatureSelector<ContextState>(FEATURE_NAME);

export const selectIsOnlineStatus = createSelector(selectFeature, (state: ContextState): boolean => state.generalInfo.isOnline);


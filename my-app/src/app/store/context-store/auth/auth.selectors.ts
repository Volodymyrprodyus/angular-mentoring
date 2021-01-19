import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserInfo } from "src/app/models/user-info.model";
import { ContextState } from "../context.state";
import { FEATURE_NAME } from "../context.store.config";

export const selectFeature = createFeatureSelector<ContextState>(FEATURE_NAME);

export const selectAuthData = createSelector(selectFeature, (state: ContextState): UserInfo => state.auth.userData);
export const selectIsUserLogged = createSelector(selectFeature, (state: ContextState): boolean => state.auth.isLoggedIn);
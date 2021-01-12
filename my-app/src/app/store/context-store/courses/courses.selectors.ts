import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Course } from "src/app/models/course.model";
import { ContextState } from "../context.state";
import { FEATURE_NAME } from "../context.store.config";

export const selectFeature = createFeatureSelector<ContextState>(FEATURE_NAME);

export const selectCoursesList = createSelector(selectFeature, (state: ContextState): Course[] => state.courses.coursesList);
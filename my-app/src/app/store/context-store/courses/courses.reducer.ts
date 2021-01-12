import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { coursesInitialState } from './courses-initial-state';
import { CoursesState } from './courses.state';
import * as coursesActions from './courses.actions';
import clone from 'clone';
import { Course } from "src/app/models/course.model";

const reducer: ActionReducer<CoursesState> = createReducer(
	coursesInitialState,
	on(
		coursesActions.fetchCoursesSuccess,
		(state: CoursesState, { courses }: { courses: Course[] }): CoursesState => ({
			...state,
			coursesList: clone(courses)
		})
	),
	on(
		coursesActions.loadMoreCoursesSuccess,
		(state: CoursesState, { courses }: { courses: Course[] }): CoursesState => ({
			...state,
			coursesList: clone(courses)
		})
	),
);

export function coursesReducer(state: CoursesState | undefined, action: Action): CoursesState {
	return reducer(state, action);
}
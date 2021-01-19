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
	on(
		coursesActions.addCourse,
		(state: CoursesState, { course }: { course: Partial<Course> }): CoursesState => {
			const copyCoursesList: Course[] = clone(state.coursesList);
			copyCoursesList.push(course as Course);

			return {
				...state,
				coursesList: copyCoursesList
			}
			
		}
	),
	on(
		coursesActions.updateCourse,
		(state: CoursesState, { course }: { course: Partial<Course> }): CoursesState => {
			const copyCoursesList: Course[] = clone(state.coursesList);
			const updatedCoursesList = copyCoursesList.map((courseItem) => courseItem.id === course.id ? courseItem = course as Course : courseItem);

			return {
				...state,
				coursesList: updatedCoursesList as Course[]
			}
			
		}
	),
);

export function coursesReducer(state: CoursesState | undefined, action: Action): CoursesState {
	return reducer(state, action);
}
import { createAction, props } from "@ngrx/store";
import { Course, UserLogin } from "src/app/models";
import { CoursesActionTypes } from "./courses.action-types";

export const fetchCoursesFromApi = createAction(CoursesActionTypes.FetchCoursesFromApi);
export const fetchCoursesSuccess = createAction(CoursesActionTypes.FetchCoursesSuccess, props<{ courses: Course[] }>());
export const fetchCoursesError = createAction(CoursesActionTypes.FetchCoursesError);
export const loadMoreCourses = createAction(CoursesActionTypes.LoadMoreCourses);
export const loadMoreCoursesSuccess = createAction(CoursesActionTypes.LoadMoreCoursesSuccess, props<{ courses: Course[] }>());
export const loadMoreCoursesError = createAction(CoursesActionTypes.LoadMoreCoursesError);
export const searchCourses = createAction(CoursesActionTypes.SearchCourses);
export const searchCoursesSuccess = createAction(CoursesActionTypes.SearchCoursesSuccess, props<{ searchPhrase: string }>());
export const searchCoursesError = createAction(CoursesActionTypes.SearchCoursesError);
export const deleteCourse = createAction(CoursesActionTypes.DeleteCourse, props<{ course: Course }>());
export const deleteCourseSuccess = createAction(CoursesActionTypes.DeleteCourseSuccess);
export const deleteCourseError = createAction(CoursesActionTypes.DeleteCourseError);
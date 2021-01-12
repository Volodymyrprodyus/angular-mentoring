import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Course } from "src/app/models/course.model";
import { UserLogin } from "src/app/models/user-login.model";
import { ContextState } from "../context.state";
import * as coursesActions from '../courses/courses.actions';
import * as coursesSelectors from '../courses/courses.selectors';

@Injectable()
export class ContextStoreFacadeService {
	constructor(private store: Store<ContextState>) {}

	// public dispatchLogIn({ userAuthData }: {userAuthData: UserLogin }): void {
	// 	this.store.dispatch(coursesActions.logIn({ userAuthData }));
	// }

	public dispatchFetchCoursesList(): void {
		this.store.dispatch(coursesActions.fetchCoursesFromApi());
	}

	public dispatchLoadMoreCourses(): void {
		this.store.dispatch(coursesActions.loadMoreCourses());
	}

	public dispatchSearchCourses(searchPhrase: string): void {
		this.store.dispatch(coursesActions.searchCoursesSuccess({ searchPhrase }));
	}

	public dispatchDeleteCourse(course: Course): void {
		this.store.dispatch(coursesActions.deleteCourse({ course }));
	}

	public selectCoursesList(): Observable<Course[]> {
		return this.store.select(coursesSelectors.selectCoursesList)
	}
}
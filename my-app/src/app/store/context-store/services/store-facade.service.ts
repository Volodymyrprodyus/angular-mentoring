import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Course } from "src/app/models/course.model";
import { ContextState } from "../context.state";
import * as coursesActions from '../courses/courses.actions';
import * as authActions from '../auth/auth.actions';
import * as coursesSelectors from '../courses/courses.selectors';
import * as authSelectors from '../auth/auth.selectors';
import * as generalInfoActions from '../generalInfo/general-info.actions';
import * as generalInfoSelectors from '../generalInfo/general-info.selectors'
import { UserInfo } from "src/app/models/user-info.model";
import { UserLogin } from "src/app/models/user-login.model";

@Injectable()
export class ContextStoreFacadeService {
	constructor(private store: Store<ContextState>) {}

	public dispatchLogIn({ userData }: {userData: UserLogin }): void {
		console.log('dispatchLogIn { userData } = ', userData);
		this.store.dispatch(authActions.logIn({ userData }));
	}

	public dispatchLogOut(): void {
		this.store.dispatch(authActions.logOut());
	}

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

	public dispatchGetIsOnlineStatus(isOnline: boolean): void {
		this.store.dispatch(generalInfoActions.getIsOnlineStatus({ isOnline }));
	}

	public dispatchAddCourse({ course }: {course: Partial<Course>}): void {
		this.store.dispatch(coursesActions.addCourse({ course }));
	}

	public dispatchUpdateCourse({ course }: {course: Partial<Course>}): void {
		this.store.dispatch(coursesActions.updateCourse({ course }));
	}

	public selectCoursesList(): Observable<Course[]> {
		return this.store.select(coursesSelectors.selectCoursesList)
	}

	public selectUserData(): Observable<UserInfo> {
		return this.store.select(authSelectors.selectAuthData)
	}

	public selectIsOnline(): Observable<boolean> {
	return this.store.select(generalInfoSelectors.selectIsOnlineStatus);
	}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course, Token, UserInfo, UserLogin } from 'src/app/models';
import { Observable } from 'rxjs';
import { RequestBody } from 'src/app/models/request-body.model';
import { GlobalConstants } from 'src/app/shared/constans/global-constants';

@Injectable({
	providedIn: 'root'
})

export class HttpService {
	private baseUrl: string = GlobalConstants.baseUrl;

	constructor(private _http: HttpClient) {}

	getAuthToken(userInfo: UserLogin ): Observable<Token> {
		return this._http.post<Token>(`${this.baseUrl}/auth/login`, userInfo);
	}

	getUserInfo(token: Token): Observable<UserInfo> {
		return this._http.post<UserInfo>(`${this.baseUrl}/auth/userinfo`, token);
	}

	getCourses(requestBody: RequestBody): Observable<Course[]> {
		return this._http.get<Course[]>(`${this.baseUrl}/courses?sort=${requestBody.sort}&count=${requestBody.count}&textFragment=${requestBody.textFragment || null}`);
	}

	addCourse(course: Course): Observable<Course> {
		return this._http.post<Course>(`${this.baseUrl}/courses`, course);
	}

	getCourse(id: number): Observable<Course> {
		return this._http.get<Course>(`${this.baseUrl}/courses/${id}`);
	}

	updateCourse(course: Course): Observable<Course> {
		return this._http.patch<Course>(`${this.baseUrl}/courses/${course.id}`, course);
	}

	deleteCourse(id: number): Observable<Course> {
		return this._http.delete<Course>(`${this.baseUrl}/courses/${id}`);
	}
}
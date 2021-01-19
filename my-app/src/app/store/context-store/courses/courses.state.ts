import { Course } from "src/app/models/course.model";

export interface CoursesState {
	coursesList: Course[];
	selectedCourse: Course;
}
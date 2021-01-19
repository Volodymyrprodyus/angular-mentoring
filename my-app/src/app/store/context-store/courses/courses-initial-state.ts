import { Course } from "src/app/models/course.model";
import { CoursesState } from "./courses.state";

export const coursesInitialState: CoursesState = {
	coursesList: [] as Course[],
	selectedCourse: null,
}
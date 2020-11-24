import { Course } from 'src/app/models/course.model';

import { CoursesListComponent } from './courses-list.component';

const course: Course = {
	id: 1,
	title: 'Video Course 1. Name tag',
	creationDate: new Date('2020/10/10'),
	duration: {hours: 1, minutes: 28},
	description: 'test description'
};

describe('CoursesListComponent', () => {
	let component: CoursesListComponent;

	beforeEach(() => {
		component = new CoursesListComponent();
		component.courses = [course];
	});

	it('should edit course when clicked edit-course button', () => {
	component.editCourse.subscribe((editedCourse: Course) => expect(editedCourse).toBe(course));
	component.onCourseEdit(course);
	});

	it('should delete course when clicked delete-course button', () => {
		component.deleteCourse.subscribe((deletedCourse: Course) => expect(deletedCourse).toBe(course));
		component.onCourseDelete(course);
		});

	it('should load more courses when clicked load-more button', () => {
		const loadValue: string = 'test courses loads';
	
		component.loadmoreCourse.subscribe((loaded: string) => expect(loaded).toBe(loadValue));
		component.onLoadMoreCourses(loadValue);
	});

});

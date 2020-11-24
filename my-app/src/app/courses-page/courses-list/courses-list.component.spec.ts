import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ngMocks } from 'ng-mocks';
import { Course } from '../../models/course.model';

import { CoursesListComponent } from './courses-list.component';
import { CoursesListModule } from './courses-list.module';

const mockCourses: Course[] = [
	{
		id: 1,
		title: 'Video Course 1. Name tag',
		creationDate: new Date('2020/10/10'),
		duration: {hours: 1, minutes: 28},
		description: 'test description'
	}
];

describe('CoursesListComponent', () => {
	let component: CoursesListComponent;
	let fixture: ComponentFixture<CoursesListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule(ngMocks.guts(CoursesListComponent, CoursesListModule));
		fixture = TestBed.createComponent(CoursesListComponent);
		component = fixture.componentInstance;
		component.courses = mockCourses;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it('should edit course when clicked edit-course button', () => {
		spyOn(component.editCourse, 'emit');

		component.onCourseEdit(mockCourses[0]);
		expect(component.editCourse.emit).toHaveBeenCalledWith(mockCourses[0]);
	});

	it('should delete course when clicked delete-course button', () => {
		spyOn(component.deleteCourse, 'emit');

		component.onCourseDelete(mockCourses[0]);
		expect(component.deleteCourse.emit).toHaveBeenCalledWith(mockCourses[0]);
	});

	it('should load more course when clicked load-more-courses button', () => {
		spyOn(component.loadmoreCourse, 'emit');
		const loadmoreButton = fixture.debugElement.query(By.css('.load-more-text'));

		loadmoreButton.triggerEventHandler('click', null);
		expect(component.loadmoreCourse.emit).toHaveBeenCalled();
	});

});

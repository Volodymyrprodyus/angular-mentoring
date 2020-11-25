import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ngMocks } from 'ng-mocks';

import { Course } from '../../models/course.model';
import { DurationPipe } from '../pipes/duration.pipe';
import { CourseItemComponent } from './course-item.component';
import { CourseItemModule } from './course-item.module';


const mockCourse: Course = {
		id: 1,
		title: 'Video Course 1. Name tag',
		creationDate: new Date('2020/10/10'),
		duration: 88,
		description: 'test description'
	};

const mockDate = {
	day: mockCourse.creationDate.getDate(),
	month: mockCourse.creationDate.getMonth() + 1,
	year: mockCourse.creationDate.getFullYear().toString().substr(-2)
};

const hours = Math.floor(mockCourse.duration / 60);
const minutes = Math.floor(mockCourse.duration % 60);
const mockCourseDuration = (hours) ? `${hours} h ${minutes} min` : `${minutes} min`;

describe('CourseItemComponent', () => {
	let component: CourseItemComponent;
	let fixture: ComponentFixture<CourseItemComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule(ngMocks.guts([CourseItemComponent, DurationPipe], CourseItemModule));
		fixture = TestBed.createComponent(CourseItemComponent);
		component = fixture.componentInstance;
		component.course = mockCourse;
		fixture.detectChanges();
	});

	it('should show correct title, date & time', () => {
		const courseTitle = fixture.debugElement.query(By.css('.item-title'));
		const courseDate = fixture.debugElement.query(By.css('.date'));
		const courseTime = fixture.debugElement.query(By.css('.time'));
		const courseDescription = fixture.debugElement.query(By.css('.item-description'));

		const courseTitleElem = courseTitle.nativeElement;
		const courseDateElem = courseDate.nativeElement;
		const courseTimeElem = courseTime.nativeElement;
		const courseDescriptionElem = courseDescription.nativeElement;

		expect(courseTitleElem.textContent).toContain(mockCourse.title.toUpperCase());
		expect(courseDateElem.textContent).toContain(`${mockDate.month}/${mockDate.day}/${mockDate.year}`);
		expect(courseTimeElem.textContent).toContain(mockCourseDuration);
		expect(courseDescriptionElem.textContent).toContain(mockCourse.description);
	});

	it('should edit course-item', () => {
		spyOn(component.edit, 'emit');
		const editButton = fixture.debugElement.query(By.css('.edit-button'));
		editButton.triggerEventHandler('click', null);
		expect(component.edit.emit).toHaveBeenCalledWith(mockCourse);
	});

	it('should delete course-item', () => {
		spyOn(component.delete, 'emit');
		const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
		deleteButton.triggerEventHandler('click', null);
		expect(component.delete.emit).toHaveBeenCalledWith(mockCourse);
	});

});

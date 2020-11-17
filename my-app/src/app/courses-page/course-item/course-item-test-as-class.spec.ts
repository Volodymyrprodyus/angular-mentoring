import { Course } from 'src/app/models/course.interface';
import { CourseItemComponent } from './course-item.component';

const mockCourse: Course = {
	id: 1,
	title: 'Video Course 1. Name tag',
	creationDate: new Date('2020/10/10'),
	duration: {hours: 1, minutes: 28},
	description: 'test description'
};

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;

  beforeEach(() => {
    component = new CourseItemComponent();
    component.course = mockCourse;
  });

  it('should edit course-item', () => {
    spyOn(component.edit, 'emit');

    component.onEdit();
    expect(component.edit.emit).toHaveBeenCalledWith(mockCourse);
  });

  it('should delete course-item', () => {
	spyOn(component.delete, 'emit');
    
	component.onDelete();
	expect(component.delete.emit).toHaveBeenCalledWith(mockCourse);
      });
});

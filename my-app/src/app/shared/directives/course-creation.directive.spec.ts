import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../models';
import { CourseCreationDirective } from './course-creation.directive';

@Component({
  template: `
    <div [appCourseCreation]="mockCourses[0].creationDate">Upcomming course - blue border</div>
    <div [appCourseCreation]="mockCourses[1].creationDate">Fresh course - green border</div>
    <div [appCourseCreation]="mockCourses[2].creationDate">Other course - no Border</div>
  `
})
class TestComponent {
  mockCourses: Course[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: new Date('2020/12/22'),
      duration: 150,
      description: 'test description',
      topRated: true
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      creationDate: new Date('2020/11/24'),
      duration: 320,
      description: 'test description',
      topRated: false
    },
    {
      id: 3,
      title: 'Video Course 3. Name tag',
      creationDate: new Date('2020/05/20'),
      duration: 0,
      description: 'test description',
      topRated: false
    }
  ];
}

describe('CourseCreationDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let templ: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseCreationDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();
    templ = fixture.debugElement.queryAll(By.directive(CourseCreationDirective));
  });

  it('1st temlate element should have class "is-upcomming"', () => {
    const elem = templ[0].nativeElement;
    expect(elem).toHaveClass('is-upcomming');
  });

  it('2nd temlate element hould have class "is-fresh"', () => {
    const elem = templ[1].nativeElement;
    expect(elem).toHaveClass('is-fresh');
  });
});

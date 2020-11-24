import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { MockBuilder } from 'ng-mocks';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

const searchValue = 'search Course';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let buttonElem: DebugElement;

  beforeEach(() => {
    MockBuilder(CourseSearchComponent).keep(FormsModule);
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick method should be called', () => {
    spyOn(component, 'onClick');
    buttonElem = fixture.debugElement.query(By.css('.search-button'));
    fixture.detectChanges();
    buttonElem.triggerEventHandler('click', null);
    expect(component.onClick).toHaveBeenCalled();
  });

  it('should show correct result when searc is active', () => {
    component.inputValue = searchValue;
    spyOn(component.searchPhrase, 'emit');

    component.onClick();
    expect(component.searchPhrase.emit).toHaveBeenCalledWith(searchValue);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInButtonComponent } from './log-in-button.component';

describe('LogInButtonComponent', () => {
  let component: LogInButtonComponent;
  let fixture: ComponentFixture<LogInButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInButtonComponent ]
    });
    fixture = TestBed.createComponent(LogInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

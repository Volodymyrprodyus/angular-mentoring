import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let injectedService: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    injectedService = TestBed.inject(CoursesService);
  });

  it('service instance should be created', () => {
    expect(injectedService).toBeTruthy();
  });
});

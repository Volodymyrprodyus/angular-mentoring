import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('AuthenticationService', () => {
  let injectedService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    injectedService = TestBed.inject(HttpService);
  });

  it('service instance should be created', () => {
    expect(injectedService).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let injectedService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    injectedService = TestBed.inject(AuthenticationService);
  });

  it('service instance should be created', () => {
    expect(injectedService).toBeTruthy();
  });
});

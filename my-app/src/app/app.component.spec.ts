import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FooterModule } from './shared/components/footer';
import { AppComponent } from './app.component';

import { ngMocks } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      ngMocks.guts(AppComponent, [FooterModule, RouterModule.forRoot([])])
    ).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });
});

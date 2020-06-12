import { TestBed } from '@angular/core/testing';

import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';

describe('ConfirmCandeactivateGuard', () => {
  let guard: ConfirmCandeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmCandeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

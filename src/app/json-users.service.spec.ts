import { TestBed, inject } from '@angular/core/testing';

import { JsonUsersService } from './json-users.service';

describe('JsonUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonUsersService]
    });
  });

  it('should be created', inject([JsonUsersService], (service: JsonUsersService) => {
    expect(service).toBeTruthy();
  }));
});

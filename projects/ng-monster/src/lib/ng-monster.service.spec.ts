import { TestBed, inject } from '@angular/core/testing';

import { NgMonsterService } from './ng-monster.service';

describe('NgMonsterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgMonsterService]
    });
  });

  it('should be created', inject([NgMonsterService], (service: NgMonsterService) => {
    expect(service).toBeTruthy();
  }));
});

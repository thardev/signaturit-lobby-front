import { TestBed } from '@angular/core/testing';

import { LobbywarsService } from './lobbywars.service';

describe('LobbywarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LobbywarsService = TestBed.get(LobbywarsService);
    expect(service).toBeTruthy();
  });
});

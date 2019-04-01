import { TestBed } from '@angular/core/testing';

import { NoticiasManagerService } from './noticias-manager.service';

describe('NoticiasManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticiasManagerService = TestBed.get(NoticiasManagerService);
    expect(service).toBeTruthy();
  });
});

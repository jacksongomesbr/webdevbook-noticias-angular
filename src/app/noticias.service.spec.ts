import { TestBed, inject } from '@angular/core/testing';

import { NoticiasService } from './noticias.service';

describe('NoticiasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiasService]
    });
  });

  it('should be created', inject([NoticiasService], (service: NoticiasService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UsuarioFireService } from './usuario-fire.service';

describe('UsuarioFireService', () => {
  let service: UsuarioFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

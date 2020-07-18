import { TestBed } from '@angular/core/testing';

import { ApiServicioProyectosService } from './api-servicio-proyectos.service';

describe('ApiServicioProyectosService', () => {
  let service: ApiServicioProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

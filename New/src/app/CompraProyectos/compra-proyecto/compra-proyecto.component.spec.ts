import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraProyectoComponent } from './compra-proyecto.component';

describe('CompraProyectoComponent', () => {
  let component: CompraProyectoComponent;
  let fixture: ComponentFixture<CompraProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

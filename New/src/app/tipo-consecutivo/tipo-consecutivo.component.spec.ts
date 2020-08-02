import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoConsecutivoComponent } from './tipo-consecutivo.component';

describe('TipoConsecutivoComponent', () => {
  let component: TipoConsecutivoComponent;
  let fixture: ComponentFixture<TipoConsecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoConsecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoConsecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

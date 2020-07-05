import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraExperimentalComponent } from './bitacora-experimental.component';

describe('BitacoraExperimentalComponent', () => {
  let component: BitacoraExperimentalComponent;
  let fixture: ComponentFixture<BitacoraExperimentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraExperimentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraExperimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

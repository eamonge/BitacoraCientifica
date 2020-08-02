import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacorasExperimentalesComponent } from './bitacoras-experimentales.component';

describe('BitacorasExperimentalesComponent', () => {
  let component: BitacorasExperimentalesComponent;
  let fixture: ComponentFixture<BitacorasExperimentalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacorasExperimentalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacorasExperimentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

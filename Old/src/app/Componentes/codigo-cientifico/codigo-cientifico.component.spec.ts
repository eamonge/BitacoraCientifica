import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoCientificoComponent } from './codigo-cientifico.component';

describe('CodigoCientificoComponent', () => {
  let component: CodigoCientificoComponent;
  let fixture: ComponentFixture<CodigoCientificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoCientificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoCientificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

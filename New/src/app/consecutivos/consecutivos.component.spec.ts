import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecutivosComponent } from './consecutivos.component';

describe('ConsecutivosComponent', () => {
  let component: ConsecutivosComponent;
  let fixture: ComponentFixture<ConsecutivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsecutivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecutivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

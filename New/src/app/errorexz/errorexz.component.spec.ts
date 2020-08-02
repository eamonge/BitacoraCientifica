import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorexzComponent } from './errorexz.component';

describe('ErrorexzComponent', () => {
  let component: ErrorexzComponent;
  let fixture: ComponentFixture<ErrorexzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorexzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorexzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

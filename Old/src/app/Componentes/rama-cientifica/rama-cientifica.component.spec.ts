import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaCientificaComponent } from './rama-cientifica.component';

describe('RamaCientificaComponent', () => {
  let component: RamaCientificaComponent;
  let fixture: ComponentFixture<RamaCientificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamaCientificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamaCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VioletComponent } from './violet.component';

describe('VioletComponent', () => {
  let component: VioletComponent;
  let fixture: ComponentFixture<VioletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VioletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VioletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

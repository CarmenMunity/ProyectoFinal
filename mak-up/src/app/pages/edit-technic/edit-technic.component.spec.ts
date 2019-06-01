import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnicComponent } from './edit-technic.component';

describe('EditTechnicComponent', () => {
  let component: EditTechnicComponent;
  let fixture: ComponentFixture<EditTechnicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTechnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTechnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

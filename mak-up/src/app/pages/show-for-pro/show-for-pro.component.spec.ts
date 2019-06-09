import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForProComponent } from './show-for-pro.component';

describe('ShowForProComponent', () => {
  let component: ShowForProComponent;
  let fixture: ComponentFixture<ShowForProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowForProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowForProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForCatComponent } from './show-for-cat.component';

describe('ShowForCatComponent', () => {
  let component: ShowForCatComponent;
  let fixture: ComponentFixture<ShowForCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowForCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowForCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

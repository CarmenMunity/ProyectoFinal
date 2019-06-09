import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForTecComponent } from './show-for-tec.component';

describe('ShowForTecComponent', () => {
  let component: ShowForTecComponent;
  let fixture: ComponentFixture<ShowForTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowForTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowForTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

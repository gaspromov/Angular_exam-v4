import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEllComponent } from './change-ell.component';

describe('ChangeEllComponent', () => {
  let component: ChangeEllComponent;
  let fixture: ComponentFixture<ChangeEllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCheckboxComponent } from './edit-checkbox.component';

describe('EditCheckboxComponent', () => {
  let component: EditCheckboxComponent;
  let fixture: ComponentFixture<EditCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

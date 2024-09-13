import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRadioFieldComponent } from './edit-radio-field.component';

describe('EditRadioFieldComponent', () => {
  let component: EditRadioFieldComponent;
  let fixture: ComponentFixture<EditRadioFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRadioFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRadioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

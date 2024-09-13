import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextareaComponent } from './edit-textarea.component';

describe('EditTextareaComponent', () => {
  let component: EditTextareaComponent;
  let fixture: ComponentFixture<EditTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

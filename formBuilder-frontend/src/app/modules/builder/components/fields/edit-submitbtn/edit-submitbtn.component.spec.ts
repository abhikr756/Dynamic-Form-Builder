import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmitbtnComponent } from './edit-submitbtn.component';

describe('EditSubmitbtnComponent', () => {
  let component: EditSubmitbtnComponent;
  let fixture: ComponentFixture<EditSubmitbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubmitbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubmitbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

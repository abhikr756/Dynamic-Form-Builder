import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFullnameComponent } from './edit-fullname.component';

describe('EditFullnameComponent', () => {
  let component: EditFullnameComponent;
  let fixture: ComponentFixture<EditFullnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFullnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFullnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

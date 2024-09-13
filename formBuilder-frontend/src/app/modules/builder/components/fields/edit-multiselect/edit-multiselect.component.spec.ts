import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultiselectComponent } from './edit-multiselect.component';

describe('EditMultiselectComponent', () => {
  let component: EditMultiselectComponent;
  let fixture: ComponentFixture<EditMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMultiselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

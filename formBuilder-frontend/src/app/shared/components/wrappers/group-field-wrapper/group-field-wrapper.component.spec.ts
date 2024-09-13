import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFieldWrapperComponent } from './group-field-wrapper.component';

describe('GroupFieldWrapperComponent', () => {
  let component: GroupFieldWrapperComponent;
  let fixture: ComponentFixture<GroupFieldWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFieldWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

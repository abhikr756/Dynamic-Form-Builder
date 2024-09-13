import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTableComponent } from './control-table.component';

describe('ControlTableComponent', () => {
  let component: ControlTableComponent;
  let fixture: ComponentFixture<ControlTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

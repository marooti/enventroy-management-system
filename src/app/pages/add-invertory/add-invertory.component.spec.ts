import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvertoryComponent } from './add-invertory.component';

describe('AddInvertoryComponent', () => {
  let component: AddInvertoryComponent;
  let fixture: ComponentFixture<AddInvertoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInvertoryComponent]
    });
    fixture = TestBed.createComponent(AddInvertoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

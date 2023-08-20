import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestComponent } from './add-rest.component';

describe('AddRestComponent', () => {
  let component: AddRestComponent;
  let fixture: ComponentFixture<AddRestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestComponent]
    });
    fixture = TestBed.createComponent(AddRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

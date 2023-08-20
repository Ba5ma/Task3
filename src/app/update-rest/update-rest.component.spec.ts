import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestComponent } from './update-rest.component';

describe('UpdateRestComponent', () => {
  let component: UpdateRestComponent;
  let fixture: ComponentFixture<UpdateRestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRestComponent]
    });
    fixture = TestBed.createComponent(UpdateRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

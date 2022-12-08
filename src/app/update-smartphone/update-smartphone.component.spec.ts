import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSmartphoneComponent } from './update-smartphone.component';

describe('UpdateSmartphoneComponent', () => {
  let component: UpdateSmartphoneComponent;
  let fixture: ComponentFixture<UpdateSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSmartphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

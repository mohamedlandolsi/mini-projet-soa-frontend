import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParModelComponent } from './recherche-par-model.component';

describe('RechercheParModelComponent', () => {
  let component: RechercheParModelComponent;
  let fixture: ComponentFixture<RechercheParModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecarbonisationStandardsComponentComponent } from './decarbonisation-standards-component.component';

describe('DecarbonisationStandardsComponentComponent', () => {
  let component: DecarbonisationStandardsComponentComponent;
  let fixture: ComponentFixture<DecarbonisationStandardsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecarbonisationStandardsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecarbonisationStandardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

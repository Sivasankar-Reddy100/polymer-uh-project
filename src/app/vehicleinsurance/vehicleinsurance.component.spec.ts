import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleinsuranceComponent } from './vehicleinsurance.component';

describe('VehicleinsuranceComponent', () => {
  let component: VehicleinsuranceComponent;
  let fixture: ComponentFixture<VehicleinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

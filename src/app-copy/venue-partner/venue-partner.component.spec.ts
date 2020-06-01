import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuePartnerComponent } from './venue-partner.component';

describe('VenuePartnerComponent', () => {
  let component: VenuePartnerComponent;
  let fixture: ComponentFixture<VenuePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

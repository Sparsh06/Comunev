import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunevPageComponent } from './comunev-page.component';

describe('ComunevPageComponent', () => {
  let component: ComunevPageComponent;
  let fixture: ComponentFixture<ComunevPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunevPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentBondsComponent } from './government-bonds.component';

describe('GovernmentBondsComponent', () => {
  let component: GovernmentBondsComponent;
  let fixture: ComponentFixture<GovernmentBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallableBondsComponent } from './callable-bonds.component';

describe('CallableBondsComponent', () => {
  let component: CallableBondsComponent;
  let fixture: ComponentFixture<CallableBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallableBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallableBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

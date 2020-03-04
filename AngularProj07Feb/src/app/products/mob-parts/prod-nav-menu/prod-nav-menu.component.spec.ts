import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdNavMenuComponent } from './prod-nav-menu.component';

describe('ProdNavMenuComponent', () => {
  let component: ProdNavMenuComponent;
  let fixture: ComponentFixture<ProdNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

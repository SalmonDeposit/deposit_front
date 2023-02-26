import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositHeaderComponent } from './deposit-header.component';

describe('DepositHeaderComponent', () => {
  let component: DepositHeaderComponent;
  let fixture: ComponentFixture<DepositHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

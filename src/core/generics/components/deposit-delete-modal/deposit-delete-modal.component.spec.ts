import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDeleteModalComponent } from './deposit-delete-modal.component';

describe('DepositDeleteModalComponent', () => {
  let component: DepositDeleteModalComponent;
  let fixture: ComponentFixture<DepositDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyManagementComponent } from './privacy-policy-management.component';

describe('PrivacyPolicyManagementComponent', () => {
  let component: PrivacyPolicyManagementComponent;
  let fixture: ComponentFixture<PrivacyPolicyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

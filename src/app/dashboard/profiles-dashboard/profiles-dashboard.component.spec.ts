import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDashboardComponent } from './profiles-dashboard.component';

describe('ProfilesDashboardComponent', () => {
  let component: ProfilesDashboardComponent;
  let fixture: ComponentFixture<ProfilesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

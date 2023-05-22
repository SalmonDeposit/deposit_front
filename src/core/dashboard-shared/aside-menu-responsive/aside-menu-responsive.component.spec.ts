import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuResponsiveComponent } from './aside-menu-responsive.component';

describe('AsideMenuResponsiveComponent', () => {
  let component: AsideMenuResponsiveComponent;
  let fixture: ComponentFixture<AsideMenuResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideMenuResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideMenuResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

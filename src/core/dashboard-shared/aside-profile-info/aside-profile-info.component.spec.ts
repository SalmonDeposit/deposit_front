import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideProfileInfoComponent } from './aside-profile-info.component';

describe('AsideProfileInfoComponent', () => {
  let component: AsideProfileInfoComponent;
  let fixture: ComponentFixture<AsideProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideProfileInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

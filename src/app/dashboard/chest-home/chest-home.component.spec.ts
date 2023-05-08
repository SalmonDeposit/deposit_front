import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestHomeComponent } from './chest-home.component';

describe('DocumentDashboardComponent', () => {
  let component: ChestHomeComponent;
  let fixture: ComponentFixture<ChestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChestHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

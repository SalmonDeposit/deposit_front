import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhoYouAreComponent } from './who-you-are.component';

describe('WhoYouAreComponent', () => {
  let component: WhoYouAreComponent;
  let fixture: ComponentFixture<WhoYouAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoYouAreComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WhoYouAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

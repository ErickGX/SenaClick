import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSenaclickComponent } from './header-senaclick.component';

describe('HeaderSenaclickComponent', () => {
  let component: HeaderSenaclickComponent;
  let fixture: ComponentFixture<HeaderSenaclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSenaclickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSenaclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

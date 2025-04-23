import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSenaclickComponent } from './menu-senaclick.component';

describe('MenuSenaclickComponent', () => {
  let component: MenuSenaclickComponent;
  let fixture: ComponentFixture<MenuSenaclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSenaclickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSenaclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

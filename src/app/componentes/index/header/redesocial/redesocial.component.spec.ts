import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesocialComponent } from './redesocial.component';

describe('RedesocialComponent', () => {
  let component: RedesocialComponent;
  let fixture: ComponentFixture<RedesocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedesocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

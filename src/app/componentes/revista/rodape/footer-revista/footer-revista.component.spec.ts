import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRevistaComponent } from './footer-revista.component';

describe('FooterRevistaComponent', () => {
  let component: FooterRevistaComponent;
  let fixture: ComponentFixture<FooterRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRevistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

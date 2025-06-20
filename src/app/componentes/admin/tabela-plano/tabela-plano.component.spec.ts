import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPlanoComponent } from './tabela-plano.component';

describe('TabelaPlanoComponent', () => {
  let component: TabelaPlanoComponent;
  let fixture: ComponentFixture<TabelaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaPlanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

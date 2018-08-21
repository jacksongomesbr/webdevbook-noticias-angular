import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacaoComponent } from './barra-de-navegacao.component';

describe('BarraDeNavegacaoComponent', () => {
  let component: BarraDeNavegacaoComponent;
  let fixture: ComponentFixture<BarraDeNavegacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDeNavegacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

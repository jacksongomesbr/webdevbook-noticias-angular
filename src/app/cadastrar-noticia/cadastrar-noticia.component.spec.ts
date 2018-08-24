import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNoticiaComponent } from './cadastrar-noticia.component';

describe('CadastrarNoticiaComponent', () => {
  let component: CadastrarNoticiaComponent;
  let fixture: ComponentFixture<CadastrarNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

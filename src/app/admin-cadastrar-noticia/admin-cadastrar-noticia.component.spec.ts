import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarNoticiaComponent } from './admin-cadastrar-noticia.component';

describe('AdminCadastrarNoticiaComponent', () => {
  let component: AdminCadastrarNoticiaComponent;
  let fixture: ComponentFixture<AdminCadastrarNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCadastrarNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastrarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeNoticiasComponent } from './lista-de-noticias.component';

describe('ListaDeNoticiasComponent', () => {
  let component: ListaDeNoticiasComponent;
  let fixture: ComponentFixture<ListaDeNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

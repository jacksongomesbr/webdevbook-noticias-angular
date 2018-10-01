import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorDeNoticiaComponent } from './leitor-de-noticia.component';

describe('LeitorDeNoticiaComponent', () => {
  let component: LeitorDeNoticiaComponent;
  let fixture: ComponentFixture<LeitorDeNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorDeNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorDeNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasAsNoticiasComponent } from './todas-as-noticias.component';

describe('TodasAsNoticiasComponent', () => {
  let component: TodasAsNoticiasComponent;
  let fixture: ComponentFixture<TodasAsNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasAsNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasAsNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

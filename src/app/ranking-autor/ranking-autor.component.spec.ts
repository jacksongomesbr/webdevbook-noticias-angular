import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAutorComponent } from './ranking-autor.component';

describe('RankingAutorComponent', () => {
  let component: RankingAutorComponent;
  let fixture: ComponentFixture<RankingAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaDailyGamesPage } from './nba-daily-games.page';

describe('NbaDailyGamesPage', () => {
  let component: NbaDailyGamesPage;
  let fixture: ComponentFixture<NbaDailyGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaDailyGamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaDailyGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

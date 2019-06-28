import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBADailyGamesPage } from './nba-daily-games.page';

describe('NbaDailyGamesPage', () => {
  let component: NBADailyGamesPage;
  let fixture: ComponentFixture<NBADailyGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBADailyGamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBADailyGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

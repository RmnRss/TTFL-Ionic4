import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDailyPicksPage } from './ranking-daily-picks.page';

describe('RankingDailyPicksPage', () => {
  let component: RankingDailyPicksPage;
  let fixture: ComponentFixture<RankingDailyPicksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDailyPicksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDailyPicksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerStatsPage } from './nba-player-stats.page';

describe('NbaPlayerStatsPage', () => {
  let component: NbaPlayerStatsPage;
  let fixture: ComponentFixture<NbaPlayerStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaPlayerStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaPlayerStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

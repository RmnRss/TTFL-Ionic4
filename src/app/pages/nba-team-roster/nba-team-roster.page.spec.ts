import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBATeamRosterPage } from './nba-team-roster.page';

describe('NbaTeamRosterPage', () => {
  let component: NBATeamRosterPage;
  let fixture: ComponentFixture<NBATeamRosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBATeamRosterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBATeamRosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

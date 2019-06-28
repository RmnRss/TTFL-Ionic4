import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingGeneralPage } from './ranking-general.page';

describe('RankingGeneralPage', () => {
  let component: RankingGeneralPage;
  let fixture: ComponentFixture<RankingGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingGeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

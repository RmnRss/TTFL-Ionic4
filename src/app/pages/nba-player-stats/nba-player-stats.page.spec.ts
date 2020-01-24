import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NBAPlayerStatsPage} from './nba-player-stats.page';

describe('NbaPlayerStatsPage', () => {
    let component: NBAPlayerStatsPage;
    let fixture: ComponentFixture<NBAPlayerStatsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NBAPlayerStatsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NBAPlayerStatsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RankingTeamPage} from './ranking-team.page';

describe('RankingTeamPage', () => {
    let component: RankingTeamPage;
    let fixture: ComponentFixture<RankingTeamPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RankingTeamPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RankingTeamPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

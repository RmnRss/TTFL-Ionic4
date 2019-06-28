import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateOrJoinTeamPage} from './create-or-join-team.page';

describe('CreateOrJoinTeamPage', () => {
    let component: CreateOrJoinTeamPage;
    let fixture: ComponentFixture<CreateOrJoinTeamPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateOrJoinTeamPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateOrJoinTeamPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

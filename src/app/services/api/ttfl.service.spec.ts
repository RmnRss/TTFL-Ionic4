import {TestBed} from '@angular/core/testing';

import {TTFLService} from './ttfl.service';

describe('TTFLService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TTFLService = TestBed.get(TTFLService);
        expect(service).toBeTruthy();
    });
});

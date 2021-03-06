import {NBATeam} from './NBATeam';

export class NBAGame {

    constructor() {
        this._startTimeUTC = new Date();
        this._startDateEastern = '';
        this._vTeam = new NBATeam();
        this._hTeam = new NBATeam();
    }

    private _startTimeUTC: Date; //Time at which the game starts

    get startTimeUTC(): Date {
        return this._startTimeUTC;
    }

    set startTimeUTC(value: Date) {
        this._startTimeUTC = value;
    }

    private _startDateEastern: string;

    get startDateEastern(): string {
        return this._startDateEastern;
    }

    set startDateEastern(value: string) {
        this._startDateEastern = value;
    }

    private _hTeam: NBATeam; //Home NBATeam userLogin

    get hTeam(): NBATeam {
        return this._hTeam;
    }

    set hTeam(value: NBATeam) {
        this._hTeam = value;
    }

    private _vTeam: NBATeam; //Visitor NBATeam userLogin

    get vTeam(): NBATeam {
        return this._vTeam;
    }

    set vTeam(value: NBATeam) {
        this._vTeam = value;
    }

}

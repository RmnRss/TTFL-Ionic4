import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {NBADay} from '../../class/NBA/NBADay';

@Injectable({
    providedIn: 'root'
})
export class DateService {
    today: Date;

    constructor(public http: HttpClient, private datePipe: DatePipe) {
        this.today = new Date();
    }

    /***
     * Formats the date to a string we can use with the NBA API
     * @param date
     */
    dateToNBAString(theDate: Date): string {
        return this.datePipe.transform(theDate, 'yyyy' + 'MM' + 'dd');
    }

    /***
     * Formats the date to a string we can use with the TTFL API
     * @param date
     */
    dateToAPIString(theDate: Date): string {
        return this.datePipe.transform(theDate, 'yyyy' + 'MM' + 'dd') + 'T00:00:00.000Z';
    }

    /***
     * Counts the number of weeks starting from a specific date
     * @param year
     * @param month_number
     */
    weekCount(year, month_number): number {
        let firstOfMonth = new Date(year, month_number - 1, 1);
        let lastOfMonth = new Date(year, month_number, 0);

        let used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();

        return Math.ceil(used / 7);
    }

    /***
     * returns the current week
     */
    getCurrentWeek(): Array<NBADay> {
        // TODO: Fix bug for sundays

        let weekDays = new Array<NBADay>();

        //let curr = new Date('January 19, 2019');
        let curr = new Date();

        for (let i = 1; i <= 7; i++) {
            let gameDay = new NBADay();

            // first day of the week
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first));

            gameDay.date = day;
            weekDays.push(gameDay);
        }

        return weekDays;
    }

    /***
     * returns a week based on a day of said week
     */
    getWeek(aDay: Date): Array<NBADay> {
        // TODO: Fix bug for sundays

        let weekDays = new Array<NBADay>();

        // let curr = new Date('January 19, 2019');
        aDay.setUTCHours(aDay.getUTCHours() + 2);
        let curr = new Date(aDay.toUTCString());

        for (let i = 1; i <= 7; i++) {
            let gameDay = new NBADay();

            // first day of the week
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first));

            gameDay.date = day;
            weekDays.push(gameDay);
        }

        return weekDays;
    }
}

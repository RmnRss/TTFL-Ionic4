import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    newEmail: string;
    newPassword: string;
    confirmPassword: string;

    constructor() {
    }

    ngOnInit() {
    }

    changeEmail(newEmail: string) {

    }

    changePassword(newPassword: string, confirmPassword: string) {

    }
}

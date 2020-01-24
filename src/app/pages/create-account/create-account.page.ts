import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/api/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.page.html',
    styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

    email: string;
    password: string;
    username: string;
    error: string;

    constructor(public router: Router,
                public userService: UserService) {
    }

    ngOnInit() {
    }

    /***
     * Creates a user using the userService method
     * Then loads the login page
     * @param email
     * @param password
     * @param username
     */
    createUser(email: string, password: string, username: string) {
        this.userService.createUser(email, password, username);
        this.router.navigate(['login']);
    }
}

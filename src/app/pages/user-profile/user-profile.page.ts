import {Component, OnInit} from '@angular/core';
import {TTFLPick} from '../../../class/TTFL/TTFLPick';
import {TTFLTeam} from '../../../class/TTFL/TTFLTeam';
import {UserService} from '../../services/api/user.service';
import {TTFLService} from '../../services/api/ttfl.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.page.html',
    styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

    userPicks: Array<TTFLPick>;
    userTeam: TTFLTeam;

    constructor(public userService: UserService,
                public ttflService: TTFLService) {
        this.userPicks = new Array<TTFLPick>();
        this.userTeam = new TTFLTeam();
    }

    ngOnInit() {
        // Team Info
        if (this.userService.userHasTeam()) {
            this.ttflService.getTeamOfUser(this.userService.user)
                .then(result => {
                    this.userTeam = result;
                }, error => {
                    console.log(error);
                });
        }

        // All Users Pick
        this.ttflService.getAllPicksOfUserPromise(this.userService.user)
            .then(results => {
                this.userPicks = results;
            }, error => {
                console.log(error);
            });
    }

    /***
     *
     */
    getUsersPick() {
        // TODO :  Implements
    }

    getUsersBestPick() {
        // TODO :  Implements
    }

    getUsersWorstPick() {
        // TODO :  Implements
    }
}

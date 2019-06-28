import {Component, OnInit} from '@angular/core';
import {User} from '../../../class/TTFL/user';
import {TTFLService} from '../../services/api/ttfl.service';
import {UserService} from '../../services/api/user.service';

@Component({
    selector: 'app-ranking-general',
    templateUrl: './ranking-general.page.html',
    styleUrls: ['./ranking-general.page.scss'],
})
export class RankingGeneralPage implements OnInit {

    users: Array<User>;

    constructor(public ttflService: TTFLService,
                public userService: UserService) {
    }

    ngOnInit() {
        this.ttflService.getUsersRankingPromise().then(
            response => {
                this.users = response.users;
            }, error => {
                console.log(error);
            });
    }

}

import {Component, OnInit} from '@angular/core';
import {TTFLService} from '../../services/api/ttfl.service';
import {UserService} from '../../services/api/user.service';
import {TTFLTeam} from '../../../class/TTFL/TTFLTeam';

@Component({
    selector: 'app-ranking-team',
    templateUrl: './ranking-team.page.html',
    styleUrls: ['./ranking-team.page.scss'],
})
export class RankingTeamPage implements OnInit {

    userTeam: TTFLTeam;
    teams: Array<TTFLTeam>;

    constructor(
        public ttflService: TTFLService,
        public userService: UserService) {
    }

    ngOnInit() {
        this.ttflService.getTeamsRankingPromise().then(
            response => {
                this.teams = response.teams;
            }, error => {
                console.log(error);
            });

        this.ttflService.getTeamOfUser(this.userService.user)
            .then(result => {
                this.userTeam = result;
            }, error => {
                console.log(error);
            });
    }

}

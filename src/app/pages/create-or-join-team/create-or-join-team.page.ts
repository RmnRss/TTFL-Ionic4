import {Component, OnInit} from '@angular/core';
import {TTFLTeam} from '../../../class/TTFL/TTFLTeam';
import {UserService} from '../../services/api/user.service';
import {TTFLService} from '../../services/api/ttfl.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-or-join-team',
  templateUrl: './create-or-join-team.page.html',
  styleUrls: ['./create-or-join-team.page.scss'],
})
export class CreateOrJoinTeamPage implements OnInit {

  // Creation or search variables
  teamName: string;
  searchedTerms: string;

  teamsFound: Array<TTFLTeam>;
  error: string;

  constructor(public userService: UserService,
              public ttflService: TTFLService,
              public router: Router) {
  }

  ngOnInit() {
  }

  /***
   * Creates a team on the api and updates the current user
   * @param name given to the new team
   */
  createTeam(name: string) {
    this.ttflService.createTeam(this.userService.user, name)
        .then((res: TTFLTeam) => {
          this.userService.updateUserTeamPromise(this.userService.user.id, res.id)
              .then(end => {
                this.router.navigate(['Team']);
              }, error => {
                console.log(error);
              });
        }, error => {
          console.log(error);
        });
  }

  /***
   * Removes the current player from the team
   */
  joinTeam(team: TTFLTeam) {
    this.userService.updateUserTeamPromise(this.userService.user.id, team.id)
        .then(() => {
          this.router.navigate(['Team']);
        });
  }

  /***
   * Send get request to the API to get the teams
   * @param terms
   */
  searchTeam(terms: string) {
    this.ttflService.getTeamByNamePromise(terms)
        .then(response => {
          this.teamsFound = response;
        }, error => {
          console.log(error);
        });
  }
}

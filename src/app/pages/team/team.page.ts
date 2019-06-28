import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/api/user.service';
import {TTFLService} from '../../services/api/ttfl.service';
import {User} from '../../../class/TTFL/user';
import {TTFLTeam} from '../../../class/TTFL/TTFLTeam';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  userTeam: TTFLTeam = new TTFLTeam();

  constructor(public userService: UserService,
              public ttflService: TTFLService,
              public router: Router) {
  }

  ngOnInit() {
    if (this.userService.userHasTeam()) {
      this.ttflService.getTeamOfUser(this.userService.user)
          .then(result => {
            this.userTeam = result;
          }, error => {
            console.log(error);
          })
          .then(next => {
            this.ttflService.getTeamMembersPromise(this.userTeam.id)
                .then(results => {
                  let tempMembers = new Array<User>();

                  for (let member of results.members) {
                    tempMembers.push(member);
                  }

                  this.userTeam.members = tempMembers;
                }, error => {
                  console.log(error);
                });
          });
    } else {

    }
  }

  /***
   * Removes the current player from the team
   */
  leaveTeam() {
    this.userService.updateUserTeamPromise(this.userService.user.id, null)
        .then(() => {
          this.router.navigate(['create-or-join-team']);
        });
  }

}

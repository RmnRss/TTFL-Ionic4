import {Component, OnInit} from '@angular/core';
import {NBADay} from '../../../class/NBA/NBADay';
import {Router} from '@angular/router';
import {NBAService} from '../../services/NBA/nba.service';
import {NBATeam} from '../../../class/NBA/NBATeam';

@Component({
  selector: 'app-nba-daily-games',
  templateUrl: './nba-daily-games.page.html',
  styleUrls: ['./nba-daily-games.page.scss'],
})
export class NbaDailyGamesPage implements OnInit {

  selectedDay: NBADay;

  constructor(public router: Router,
              public nbaService: NBAService) {
  }

  ngOnInit() {
    this.selectedDay = this.nbaService.getCurrentDay();

    for (let game of this.selectedDay.nbaGames) {

      this.nbaService.getNBATeam(game.hTeam)
          .then(team => {
            game.hTeam = team;
          });

      this.nbaService.getNBATeam(game.vTeam)
          .then(team => {
            game.vTeam = team;
          });
    }
  }

  /***
   * Loads roster page with the selected team
   * @param selectedTeam : team selected by the user
   */
  showRoster(selectedTeam: NBATeam) {
    this.nbaService.setCurrentTeam(selectedTeam);
    this.router.navigate(['nba-team-roster']);
  }

}

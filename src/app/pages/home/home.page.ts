import {Component, OnInit} from '@angular/core';
import {TTFLPick} from '../../../class/TTFL/TTFLPick';
import {NBADay} from '../../../class/NBA/NBADay';
import {NBAService} from '../../services/NBA/nba.service';
import {UserService} from '../../services/api/user.service';
import {DateService} from '../../services/date.service';
import {TTFLService} from '../../services/api/ttfl.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  picks: Array<TTFLPick>;
  NBADaysOfTheWeek: Array<NBADay>;

  /***
   * Initializes the user information on page creation
   */
  constructor(public router: Router,
              public nbaService: NBAService,
              public userService: UserService,
              public dateService: DateService,
              public ttflService: TTFLService) {

  }

  /***
   * Called everytime the page is loaded
   * Get the links from the NBA API
   * Then for each NBA Day of the Week gets the picks of the user
   */
  ngOnInit() {
    this.picks = new Array<TTFLPick>();
    this.NBADaysOfTheWeek = this.dateService.getWeek(new Date('22 May, 2019'));

    this.nbaService.getLinksPromise()
        .then(res => {
          this.nbaService.links = res.links;
        })
        .then(next => {
          for (let gameDay of this.NBADaysOfTheWeek) {
            // Get the games
            this.nbaService.getGames(this.dateService.dateToNBAString(gameDay.date))
                .then(games => {
                  gameDay.nbaGames = games;

                  if (gameDay.hasGames()) {

                    this.ttflService.getPickOfUser(gameDay, this.userService.user)
                        .then(pickReceived => {
                          let pick = pickReceived;
                          this.picks.push(pick);
                          console.log(pick);
                        });

                  }
                });
          }
        });
  }

  /***
   * Load the daily game page and passes the games and dates as parameters
   * @param date selected by the user
   */
  showGamePage(day: NBADay) {
    this.nbaService.setCurrentDay(day);
    this.router.navigate(['nba-daily-games']);
  }
}

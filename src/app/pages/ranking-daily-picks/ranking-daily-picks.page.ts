import {Component, OnInit} from '@angular/core';
import {TTFLService} from '../../services/api/ttfl.service';
import {UserService} from '../../services/api/user.service';
import {TTFLPick} from '../../../class/TTFL/TTFLPick';

@Component({
  selector: 'app-ranking-daily-picks',
  templateUrl: './ranking-daily-picks.page.html',
  styleUrls: ['./ranking-daily-picks.page.scss'],
})
export class RankingDailyPicksPage implements OnInit {

  picks: Array<TTFLPick>;

  constructor(public ttflService: TTFLService,
              public userService: UserService) {
    this.picks = new Array<TTFLPick>();
  }

  ngOnInit() {
    // TODO : get all yesterday's pick and rank them

    this.ttflService.getResultsOfYesterday().then(
        response => {
          this.picks = response;
        },
        error => {
          console.log(error);
        });
  }

}

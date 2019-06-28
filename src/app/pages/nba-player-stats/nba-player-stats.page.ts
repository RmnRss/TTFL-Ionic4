import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NBAPlayer} from '../../../class/NBA/NBAPlayer';
import {TTFLPick} from '../../../class/TTFL/TTFLPick';
import {Router} from '@angular/router';
import {NBAService} from '../../services/NBA/nba.service';

@Component({
  selector: 'app-nba-player-stats',
  templateUrl: './nba-player-stats.page.html',
  styleUrls: ['./nba-player-stats.page.scss'],
})
export class NBAPlayerStatsPage implements OnInit {

  NBAPlayer: NBAPlayer;
  picks: Array<TTFLPick>;

  @ViewChild('vanishingSection') elementView: ElementRef;

  constructor(public router: Router,
              public nbaService: NBAService) {
  }

  /***
   * Loads the NBAPlayer and the related picks everytime the page is reloaded
   */
  ngOnInit() {
    this.NBAPlayer = this.nbaService.getCurrentPlayer();
    this.picks = new Array<TTFLPick>();
  }

  /***
   * Returns if the header section is hidden by comparing its size
   */
  sectionHidden(): boolean {
    if (this.elementView.nativeElement.offsetHeight > 0) {
      return false;
    } else {
      return true;
    }
  }

}

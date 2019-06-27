import {NBAPlayer} from '../NBA/NBAPlayer';
import {NBADay} from '../NBA/NBADay';

export class TTFLPick {

  bestPick: boolean;
  gameDate: NBADay;
  hasPlayer: boolean;
  id: number;
  isUpdated: boolean;
  nbaPlayer: NBAPlayer;
  opposingTeamId: number;
  rank: number;
  score: number;
  worstPick: boolean;

  constructor() {
    this.id = null;
    this.nbaPlayer = new NBAPlayer();
    this.gameDate = new NBADay();
    this.bestPick = false;
    this.worstPick = false;
    this.score = null;
    this.rank = null;
    this.hasPlayer = false;
    this.isUpdated = false;
    this.opposingTeamId = null;
  }
}

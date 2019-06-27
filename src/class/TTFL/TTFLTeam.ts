import {User} from './user';

export class TTFLTeam {
  id: number;
  members: Array<User>;
  name: string;
  points: number;
  rank: number;

  constructor() {
    this.id = null;
    this.members = new Array<User>();
    this.name = '';
    this.points = 0;
    this.rank = null;
  }
}

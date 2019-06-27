export class User {

  email: string;
  hasTeam: boolean;
  id: number;
  money: number;
  points: number;
  rank: number;
  teamId: number;
  username: string;

  constructor() {
    this.email = '';
    this.hasTeam = false;
    this.id = null;
    this.money = null;
    this.points = null;
    this.rank = null;
    this.teamId = null;
    this.username = '';
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NBATeam} from '../../../class/NBA/NBATeam';
import {NBAPlayer} from '../../../class/NBA/NBAPlayer';
import {NBADay} from '../../../class/NBA/NBADay';
import {ToastController} from '@ionic/angular';
import {NBAService} from '../../services/NBA/nba.service';
import {UserService} from '../../services/api/user.service';
import {TTFLService} from '../../services/api/ttfl.service';
import {User} from '../../../class/TTFL/user';

@Component({
    selector: 'app-nba-team-roster',
    templateUrl: './nba-team-roster.page.html',
    styleUrls: ['./nba-team-roster.page.scss'],
})
export class NBATeamRosterPage implements OnInit {

    selectedTeam: NBATeam;
    selectedPlayer: NBAPlayer;

    day: NBADay;

    roster: Array<NBAPlayer>;
    bannedPlayersIds: Array<number>;

    constructor(public router: Router,
                public toastCtrl: ToastController,
                public nbaService: NBAService,
                public userService: UserService,
                public ttflService: TTFLService) {
    }

    ngOnInit() {
        // Initialization
        this.selectedTeam = new NBATeam();
        this.day = new NBADay();
        this.roster = new Array<NBAPlayer>();
        this.bannedPlayersIds = new Array<number>();
        this.selectedPlayer = new NBAPlayer();

        this.selectedTeam = this.nbaService.getCurrentTeam();
        this.day = this.nbaService.getCurrentDay();

        this.ttflService.getBannedNBAPlayersOfUserPromise(this.userService.user)
            .then(response => {
                this.bannedPlayersIds = response.data;
            })
            .then(next => {
                this.nbaService.getNBATeamRoster(this.selectedTeam)
                    .then(roster => {
                            this.roster = roster;
                        }
                    )
                    .then(res => {
                        for (let teamPlayer of this.roster) {
                            this.isAvailable(teamPlayer);
                        }
                    });
            });
    }


    /***
     * Loads the NBA Player stats page
     * @param selectedPlayer
     */
    showPlayerStats(selectedPlayer: NBAPlayer) {
        this.nbaService.setCurrentPlayer(selectedPlayer);
        this.router.navigate(['nba-player-stats']);
    }

    /***
     * Select an NBA Player form the list
     * @param player
     */
    selectPlayer(player: NBAPlayer): NBAPlayer {
        for (let rosterPlayer of this.roster) {
            rosterPlayer.selected = false;
        }

        player.selected = true;
        this.selectedPlayer = player;
        return player;
    }

    /***
     * Checks if a player from the roster is on the banned list
     * @param player
     */
    isAvailable(player: NBAPlayer) {
        for (let id of this.bannedPlayersIds) {
            if (id == player.personId) {
                player.isAvailable = false;
            }
        }
    }

    /***
     * Post the Pick of the user
     * @param nbaPlayer selected for the pick
     * @param user who made the pick
     * @param day NBA Day for the pick
     */
    postPick(nbaPlayer: NBAPlayer, user: User, day: NBADay) {
        this.ttflService.getPickOfUser(day, this.userService.user).then(res => {
            if (res.hasPlayer == false) {
                this.ttflService.postPickPromise(nbaPlayer, user, day.date).then(
                    resp => {
                        this.presentToast('Pick selectionné : ' + this.selectedPlayer.firstName + ' ' + this.selectedPlayer.lastName);
                        this.router.navigate(['home']);
                    }, error => {
                        this.presentToast('Erreur lors de l\'envoi du pick au serveur.');
                        console.log(error);
                    });
            } else {
                this.ttflService.updatePickPromise(res.id, nbaPlayer, user, day.date).then(resp => {
                    this.presentToast('Pick mis à jour : ' + this.selectedPlayer.firstName + ' ' + this.selectedPlayer.lastName);
                    this.router.navigate(['home']);
                }, error => {
                    this.presentToast('Erreur lors de l\'envoi du pick au serveur.');
                    console.log(error);
                });
            }

        });
    }

    /***
     * Calls the postPick method onc the button is pushed
     */
    confirmPick() {
        this.postPick(this.selectedPlayer, this.userService.user, this.day);
    }

    /***
     * Shows a toast
     * Called in postPick
     * @param msg
     */
    async presentToast(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
}

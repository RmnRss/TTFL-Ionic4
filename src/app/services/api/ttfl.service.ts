import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {DateService} from '../date.service';
import {NBAService} from '../NBA/nba.service';
import {NBAPlayer} from '../../../class/NBA/NBAPlayer';
import {User} from '../../../class/TTFL/user';
import {TTFLPick} from '../../../class/TTFL/TTFLPick';
import {NBADay} from '../../../class/NBA/NBADay';
import {TTFLTeam} from '../../../class/TTFL/TTFLTeam';

@Injectable({
    providedIn: 'root'
})
export class TTFLService {
    apiUrl: string = 'http://163.172.190.75:5498/api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
            //'Authorization': 'my-auth-token'
        })
    };

    constructor(public http: HttpClient,
                public toastCtrl: ToastController,
                public dateService: DateService,
                public nbaService: NBAService) {

    }

    /**********************************************************************
     *                              PLAYERS                               *
     * *******************************************************************/

    getUsersRanking(): Promise<any> {
        let url = this.apiUrl + 'users/ranking';

        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe(
                (success: any) => {
                    resolve(success.users);
                }, error => {
                    reject(error);
                });
        });
    }

    /**********************************************************************
     *                              PICKS                                 *
     * *******************************************************************/

    /***
     * Get the promise to post a pick
     * @param player
     * @param user
     * @param date
     */
    postPickPromise(player: NBAPlayer, user: User, date: Date): Promise<any> {
        let url = this.apiUrl + 'picks';

        return new Promise((resolve, reject) => {
            this.http.post(url, {
                date: date,
                userId: user.id,
                nbaPlayerId: player.personId
            }, this.httpOptions)
                .subscribe(success => {
                    resolve(success);
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Returns the promise to update an existing pick
     * @param existingPickId
     * @param player
     * @param user
     * @param date
     */
    updatePickPromise(existingPickId: number, player: NBAPlayer, user: User, date: Date): Promise<any> {
        let url = this.apiUrl + 'picks/' + existingPickId;

        return new Promise((resolve, reject) => {
            this.http.put(url, {
                id: existingPickId,
                date: date,
                userId: user.id,
                nbaPlayerId: player.personId
            }, this.httpOptions)
                .subscribe(success => {
                    resolve(success);
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Returns all the picks of Yesterday
     */
    getResultsOfYesterday(): Promise<any> {
        let url = this.apiUrl + 'picks/results';
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((success: any) => {
                let picks = new Array<TTFLPick>();
                let rank = 1;
                for (let pick of success.picks) {
                    let tempPick = new TTFLPick();

                    tempPick.nbaPlayer.personId = pick.nbaPlayerId;
                    tempPick.score = pick.score;
                    tempPick.bestPick = pick.bestPick;
                    tempPick.worstPick = pick.worstPick;
                    tempPick.rank = rank;
                    rank++;
                    this.nbaService.getNBAPlayer(pick.nbaPlayerId)
                        .then(player => {
                            tempPick.nbaPlayer = player;
                            picks.push(tempPick);
                        });
                }
                resolve(picks);
            }, error => {
                reject(error);
            });
        });
    }

    /***
     * Returns the promise to get the pick of a user for a specific date
     * @param date
     * @param user
     */
    getPickOfUser(day: NBADay, user: User): Promise<any> {
        let url = this.apiUrl + 'picks';

        // Formating date for the database
        // Specific time is not needed
        let date = new Date(day.date);

        date.setUTCHours(0);
        date.setUTCMinutes(0);
        date.setUTCSeconds(0);
        date.setUTCMilliseconds(0);

        let filter = {'where': {'userId': user.id, 'date': day.date}};
        let params = new HttpParams().set('filter', JSON.stringify(filter));

        return new Promise((resolve, reject) => {
            this.http.get(url, {params: params}).subscribe(
                (received: any) => {
                    let pick = new TTFLPick();
                    pick.gameDate = day;

                    // If a pick has already been chosen this week we get the information about all the picks
                    if (received.length != 0) {
                        pick.hasPlayer = true;
                        pick.id = received[0].id;
                        pick.nbaPlayer.personId = received[0].nbaPlayerId;
                        pick.score = received[0].score;
                        pick.bestPick = received[0].bestPick;
                        pick.worstPick = received[0].worstPick;
                        pick.isUpdated = received[0].isUpdated;

                        this.nbaService.getNBAPlayer(pick.nbaPlayer.personId)
                            .then(player => {
                                pick.nbaPlayer = player;
                            });

                        resolve(pick);
                    } else {
                        resolve(pick);
                    }
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Returns the promise to get the pick of a user for a specific date
     * @param date
     * @param user
     */
    getAllPicksOfUserPromise(user: User): Promise<any> {
        let url = this.apiUrl + 'picks/ofUser?userId=' + user.id;

        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe(
                (success: any) => {
                    let userPicks = new Array<TTFLPick>();

                    for (let pick of success.picks) {
                        let tempPick = new TTFLPick();

                        tempPick.gameDate.date = new Date(pick.date);
                        tempPick.nbaPlayer.personId = pick.nbaPlayerId;
                        tempPick.score = pick.score;
                        tempPick.bestPick = pick.bestPick;
                        tempPick.worstPick = pick.worstPick;
                        tempPick.isUpdated = pick.isUpdated;

                        this.nbaService.getNBAPlayer(pick.nbaPlayerId)
                            .then(player => {
                                tempPick.nbaPlayer = player;
                                userPicks.push(tempPick);
                            });
                    }
                    resolve(userPicks);
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Returns the promise to get the pick of a user for a specific date
     * @param date
     * @param user
     */
    getBannedNBAPlayersOfUserPromise(user: User): Promise<any> {
        let url = this.apiUrl + 'picks/bannedPlayers?userId=' + user.id;

        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe(
                success => {
                    resolve(success);
                }, error => {
                    reject(error);
                });
        });
    }

    /**********************************************************************
     *                             TEAMS                                  *
     * *******************************************************************/

    /***
     * Creates a team on the API
     * @param email
     * @param password
     * @param username
     */
    createTeam(creator: User, teamName: string) {
        let url = this.apiUrl + 'ttflTeams';

        return new Promise((resolve, reject) => {

            this.http.post(url, {
                name: teamName,
            }).subscribe(success => {
                    this.presentToast('Votre équipe a bien été créée');
                    resolve(success);
                }, error => {
                    this.presentToast('Echec lors de la création de l\'équipe');
                    reject(error);
                }
            );
        });

    }

    getTeamOfUser(user: User): Promise<any> {
        let url = this.apiUrl + 'ttflTeams/' + user.teamId;

        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe((success: TTFLTeam) => {
                let userTeam = new TTFLTeam();

                userTeam.id = success.id;
                userTeam.name = success.name;
                userTeam.rank = success.rank;
                userTeam.points = success.points;

                resolve(userTeam);
            }, error => {
                reject(error);
            });
        });
    }

    /***
     * Search the API for a team with a specific name
     * @param date
     * @param user
     */
    getTeamByNamePromise(teamName: string): Promise<any> {
        let url = this.apiUrl + 'ttflTeams';

        let filter = {'where': {'name': teamName}};
        let params = new HttpParams().set('filter', JSON.stringify(filter));

        return new Promise((resolve, reject) => {
            this.http.get(url, {params: params}).subscribe(
                success => {
                    resolve(success);
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Get the members of a team
     * @param teamId
     */
    getTeamMembersPromise(teamId: number): Promise<any> {
        let url = this.apiUrl + 'ttflTeams/members?teamId=' + teamId;

        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe(
                success => {
                    resolve(success);
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Get teams ranked
     */
    getTeamsRankingPromise(): Promise<any> {
        let url = this.apiUrl + 'ttflTeams/ranking';

        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe(
                success => {
                    resolve(success);
                }, error => {
                    reject(error);
                });
        });
    }

    /***
     * Creates a toast of 2 sec
     * @param msg text to display on the toast
     */
    async presentToast(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
}

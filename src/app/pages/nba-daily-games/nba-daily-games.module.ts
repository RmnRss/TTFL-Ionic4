import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {NBADailyGamesPage} from './nba-daily-games.page';

const routes: Routes = [
    {
        path: '',
        component: NBADailyGamesPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [NBADailyGamesPage]
})
export class NbaDailyGamesPageModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RankingDailyPicksPage} from './ranking-daily-picks.page';

const routes: Routes = [
    {
        path: '',
        component: RankingDailyPicksPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RankingDailyPicksPage]
})
export class RankingDailyPicksPageModule {
}

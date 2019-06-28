import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RankingGeneralPage} from './ranking-general.page';

const routes: Routes = [
    {
        path: '',
        component: RankingGeneralPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RankingGeneralPage]
})
export class RankingGeneralPageModule {
}

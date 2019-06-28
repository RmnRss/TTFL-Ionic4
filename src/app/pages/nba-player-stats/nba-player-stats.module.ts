import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {NBAPlayerStatsPage} from './nba-player-stats.page';
import {ScrollVanishModule} from '../../directives/scroll-vanish.module';

const routes: Routes = [
  {
    path: '',
    component: NBAPlayerStatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ScrollVanishModule
  ],
  declarations: [NBAPlayerStatsPage]
})
export class NbaPlayerStatsPageModule {
}

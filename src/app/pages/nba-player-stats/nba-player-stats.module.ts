import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NbaPlayerStatsPage } from './nba-player-stats.page';
import {ScrollVanishModule} from '../../directives/scroll-vanish.module';

const routes: Routes = [
  {
    path: '',
    component: NbaPlayerStatsPage
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
  declarations: [NbaPlayerStatsPage]
})
export class NbaPlayerStatsPageModule {}

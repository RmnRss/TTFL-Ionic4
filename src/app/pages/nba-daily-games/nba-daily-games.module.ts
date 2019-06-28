import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NbaDailyGamesPage } from './nba-daily-games.page';

const routes: Routes = [
  {
    path: '',
    component: NbaDailyGamesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NbaDailyGamesPage]
})
export class NbaDailyGamesPageModule {}

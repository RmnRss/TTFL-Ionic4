import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NBATeamRosterPage } from './nba-team-roster.page';

const routes: Routes = [
  {
    path: '',
    component: NBATeamRosterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NBATeamRosterPage]
})
export class NbaTeamRosterPageModule {}

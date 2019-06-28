import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateOrJoinTeamPage } from './create-or-join-team.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOrJoinTeamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateOrJoinTeamPage]
})
export class CreateOrJoinTeamPageModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {UserProfilePage} from './user-profile.page';
import {ScrollVanishModule} from '../../directives/scroll-vanish.module';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
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
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {
}

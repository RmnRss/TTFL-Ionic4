import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'create-account', loadChildren: './pages/create-account/create-account.module#CreateAccountPageModule' },
  { path: 'create-or-join-team', loadChildren: './pages/create-or-join-team/create-or-join-team.module#CreateOrJoinTeamPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'nba-daily-games', loadChildren: './pages/nba-daily-games/nba-daily-games.module#NbaDailyGamesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

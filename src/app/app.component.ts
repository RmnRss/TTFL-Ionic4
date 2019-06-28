import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {UserService} from './services/api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private router: Router,
      private menu: MenuController,
      public userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(destination: string) {
    this.menu.toggle();
    this.router.navigate(['/' + destination]);
  }

  logOut() {
    // TODO : Add logout promise & fix logout
    this.openPage('login');
  }

  openTeamPage() {
    this.menu.toggle();
    if (this.userService.userHasTeam()) {
      this.router.navigate(['/team']);
    } else {
      this.router.navigate(['/create-or-join-team']);
    }
  }
}

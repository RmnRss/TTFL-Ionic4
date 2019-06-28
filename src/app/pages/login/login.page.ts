import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';
import {UserService} from '../../services/api/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userLogin: string;
    password: string;
    error: string;

    passwordType: string;
    passwordShown: boolean;

    constructor(public router: Router,
                public loadingCtrl: LoadingController,
                public userService: UserService,
                public toastCtrl: ToastController
    ) {

        this.passwordType = 'password';
        this.passwordShown = false;
    }

    ngOnInit() {
    }

    /***
     * Logs the user in
     * Depending on the HTTPS GET Response we either displays errors or load the HomePage
     * @param id string entered by the user
     * @param password string entered by the user
     */
    login(id: string, password: string) {
        this.userService.logIn(id, password)
            .then(resp => {
                this.presentLoading();
                this.router.navigate(['home']);
            })
            .catch(errorMessage => {
                this.error = errorMessage;
            });
    }

    /***
     * Shows a loader for the connexion
     */
    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            spinner: null,
            duration: 5000,
            message: 'Please wait...'
        });
        return await loading.present();
    }

    /***
     * Loads the account creation page
     */
    goToCreateAccount() {
        this.router.navigate(['create-account']);
    }

    /***
     * Uses the API to reset the users password
     */
    forgotPassword() {
        // TODO : Implement
    }

    /***
     * Loads the rules page
     */
    showRules() {
        this.router.navigate(['rules']);
    }

    /***
     * Loads the FAQ page
     */
    showFAQ() {
        this.router.navigate(['faq']);
    }

    /***
     * Hides or show password using the http parameter type
     */
    togglePassword() {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        } else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    }


    async presentToast(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

}





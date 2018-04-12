import {Component, ViewChild} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    AlertController,
    Navbar,
    Events
} from 'ionic-angular';
import {Platform, ActionSheetController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';
import {ProfilePage} from '../profile/profile';

@IonicPage()
@Component({selector: 'page-chat', templateUrl: 'chat.html'})
export class ChatPage {

    id : number;
    username : string;

    @ViewChild(Navbar)navBar : Navbar;

    constructor(public platform : Platform, public navCtrl : NavController, public navParams : NavParams, public alertCtrl : AlertController, public events : Events, public actionsheetCtrl : ActionSheetController) {

        if (window.location == "http://localhost:8100/") 
            alert("desktop");
        else 
            alert("mobile");
        
        this.id = parseInt(navParams.get('id'));
        this.username = navParams.get('username');
    }

    ionViewDidLoad() {
        //this.events.publish("hideTabEmit", true);
        this.navBar.backButtonClick = (e : UIEvent) => {
            this
                .navCtrl
                .pop();
            console.log("popping ChatPage");
        }
        console.log('entering ChatPage');
    }

    showConfirm() {
        let confirm = this
            .alertCtrl
            .create({
                title: 'Go Private?',
                message: 'In private mode all messages are deleted after 5 mins.',
                buttons: [
                    {
                        text: 'Disagree',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    }, {
                        text: 'Agree',
                        handler: () => {
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
        confirm.present();
    }

    openMenu() {
        let actionSheet = this
            .actionsheetCtrl
            .create({
                title: 'Albums',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'See profile',
                        icon: !this
                            .platform
                            .is('ios')
                            ? 'person'
                            : null,
                        handler: () => {
                            this
                                .navCtrl
                                .push(ProfilePage)
                            console.log('See profile clicked');
                        }
                    }, {
                        text: 'Go private',
                        icon: !this
                            .platform
                            .is('ios')
                            ? 'lock'
                            : null,
                        handler: () => {
                            this.showConfirm();
                            console.log('Go private clicked');
                        }
                    }, {
                        text: 'Time a message',
                        icon: !this
                            .platform
                            .is('ios')
                            ? 'time'
                            : null,
                        handler: () => {
                            console.log('Time a message clicked');
                        }
                    }, {
                        text: 'Settings',
                        icon: !this
                            .platform
                            .is('ios')
                            ? 'settings'
                            : null,
                        handler: () => {
                            console.log('Settings clicked');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel', // will always sort to be on the bottom
                        icon: !this
                            .platform
                            .is('ios')
                            ? 'close'
                            : null,
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
        actionSheet.present();
    }

}

/*


    constructor(private navController: NavController){}
    ionViewDidLoad() {
      this.navBar.backButtonClick = (e:UIEvent)=>{
       // todo something
       this.navController.pop();
      }
    }




*/

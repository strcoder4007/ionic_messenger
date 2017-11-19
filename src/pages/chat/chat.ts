import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    id: number;
    username: string;


    constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionsheetCtrl: ActionSheetController) {

        this.id = parseInt(navParams.get('id'));
        this.username = navParams.get('username');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'Go Private?',
            message: 'User 2 has asked you to go private',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
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
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'See profile',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'person' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Go private',
                    icon: !this.platform.is('ios') ? 'lock' : null,
                    handler: () => {
                        this.showConfirm();
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Time a message',
                    icon: !this.platform.is('ios') ? 'time' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Settings',
                    icon: !this.platform.is('ios') ? 'settings' : null,
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}

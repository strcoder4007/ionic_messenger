import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import{ ChatPage } from '../chat/chat';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    gotoChatPage() {
        this.navCtrl.push(ChatPage);    
    }

}

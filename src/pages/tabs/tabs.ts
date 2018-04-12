import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = ContactPage;

    constructor(public events: Events, public navCtrl: NavController) {

        events.subscribe('hideTabEmit', (hide) => {
            //this.navCtrl.push(ChatPage, userObj);
        });
        
    }

}
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
    msgs = [];
    env = "nothing";


    @ViewChild(Navbar)navBar : Navbar;

    constructor(public platform : Platform, public navCtrl : NavController, public navParams : NavParams, public alertCtrl : AlertController, public events : Events, public actionsheetCtrl : ActionSheetController) {

        if (window.location.toString() == "http://localhost:8100/") {
            this.env = "d";
        }
        else {
            this.env = "m";

        }

        let date = new Date();

        this.msgs.push({
            time : (date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours().toString()) +":"+((date.getMinutes()-5).toString().length == 1 ? '0'+(date.getMinutes()-5) : (date.getMinutes()-5).toString()),
            msg : "hey",
            env: "d"
        });
        this.msgs.push({
            time : (date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours().toString()) +":"+((date.getMinutes()-3).toString().length == 1 ? '0'+(date.getMinutes()-3) : (date.getMinutes()-3).toString()),
            msg : "sup?",
            env: "d"
        });
        this.msgs.push({
            time : (date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours().toString()) +":"+((date.getMinutes()-4).toString().length == 1 ? '0'+(date.getMinutes()-4) : (date.getMinutes()-4).toString()),
            msg : "hi",
            env: "m"
        });
        this.msgs.push({
            time : (date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours().toString()) +":"+((date.getMinutes()-1).toString().length == 1 ? '0'+(date.getMinutes()-1) : (date.getMinutes()-1).toString()),
            msg : "suck a dick dumbshit!",
            env: "m"
        });
        function compare(a,b) {
            if (a.time < b.time)
              return -1;
            if (a.time > b.time)
              return 1;
            return 0;
          }
        this.msgs.sort(compare);
        
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

    sendMsg() {
        let curMsg = (<HTMLInputElement>document.getElementById("myMsg")).value;
        let date = new Date();
        this.msgs.push({
            time : (date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours().toString()) +":"+(date.getMinutes().toString().length == 1 ? '0'+date.getMinutes() : date.getMinutes().toString()),
            msg : curMsg,
            env: this.env
        });
        function compare(a,b) {
            if (a.time < b.time)
              return -1;
            if (a.time > b.time)
              return 1;
            return 0;
          }
        this.msgs.sort(compare);
        (<HTMLInputElement>document.getElementById("myMsg")).value = "";
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

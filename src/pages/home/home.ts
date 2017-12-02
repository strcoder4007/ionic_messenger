import { Component } from '@angular/core';
import { NavController, AlertController, Events } from 'ionic-angular';

import { ChatPage } from '../chat/chat';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    usersJunk: Observable<any>;
    userImagesJunk: Observable<any>;
    users: Array<any>;
    userImages: Array<any>;

    constructor(
        public navCtrl: NavController, 
        public alertCtrl: AlertController, 
        public http: Http, 
        public events: Events
    ){

        console.log("entering homepage");
        


        //getting images
        this.userImagesJunk = this.http.get('https://jsonplaceholder.typicode.com/photos');
        this.userImagesJunk.map(res => res.json())
            .subscribe(userImagesJunk1 => {
                //console.log('my images', userImagesJunk1);
                this.userImages = userImagesJunk1;
            })

        //getting users
        this.usersJunk = this.http.get('https://jsonplaceholder.typicode.com/users');
        this.usersJunk
            .map(res => res.json())
            .subscribe(usersJunk1 => {
                console.log('my data: ', usersJunk1);
                this.users = usersJunk1;
            })

    }



    gotoChatPage(id: string) {
        let userObj = this.users[parseInt(id)-1];
        this.navCtrl.push(ChatPage, userObj);
        //this.events.publish("hideTabEmit", true, userObj);
    }

}

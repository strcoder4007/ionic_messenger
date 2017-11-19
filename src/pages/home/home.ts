import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

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

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http) {


        //getting images
        this.userImagesJunk = this.http.get('https://jsonplaceholder.typicode.com/photos');
        this.userImagesJunk.map(res => res.json())
            .subscribe(userImagesJunk => {
                //console.log('my images', userImagesJunk);
                this.userImages = userImagesJunk;
            })

        //getting users
        this.usersJunk = this.http.get('https://jsonplaceholder.typicode.com/users');
        this.usersJunk
            .map(res => res.json())
            .subscribe(usersJunk => {
                //console.log('my data: ', usersJunk);
                this.users = usersJunk;
            })

    }



    gotoChatPage() {
        this.navCtrl.push(ChatPage);
    }

}

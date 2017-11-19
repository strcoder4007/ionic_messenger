import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import{ ChatPage } from '../chat/chat';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    users: Observable<any>;
    userImages: Observable<any>;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http) {

        //getting users
        this.users = this.http.get('https://jsonplaceholder.typicode.com/users');
        this.users
        .map(res => res.json())
        .subscribe(users => {
          console.log('my data: ', users);
        })

        //getting images
        this.userImages = this.http.get('https://jsonplaceholder.typicode.com/photos');
        this.userImages.map(res => res.json())
        .subscribe(userImages => {
            console.log('my images', userImages);
        })

    }



    gotoChatPage() {
        this.navCtrl.push(ChatPage);    
    }

}

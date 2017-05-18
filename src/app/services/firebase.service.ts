import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  users: FirebaseListObservable<Users[]>
  constructor(private af: AngularFireDatabase) {
    this.users = this.af.list('/users');
   }

  addUser(user){
    return this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

}

interface Users {
  companyname?:any;
  email?:any;
  password?:any;
}

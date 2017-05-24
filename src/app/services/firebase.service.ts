import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  users: FirebaseListObservable<Users[]>
  constructor(private af: AngularFireDatabase) {
    this.users = this.af.list('/users') as FirebaseListObservable<Users[]>;
   }

  addUser(user){
    return this.users.push(user);
  }
 
  getUsers(){
    return this.users;
  }

  getUserDetails(email){
    console.log("Email recieved (getUserDetails):"+email);
    let object = this.af.list('/users') as FirebaseListObservable<any[]>;
    console.log("Query Object:"+object);
    return object;
  }

}

interface Users {
  companyname?:any;
  email?:any;
  role?:any;
}

interface Pages {
  id?:any;
  content?:any;
  title?:any;
  index?:any;
  dateCreated?:any;
  createdBy?:any;
  lastUpdated?:any;
  lastUpdatedBy?:any;
  url?:any;
  company?:any;
}

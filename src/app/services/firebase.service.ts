import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  users: FirebaseListObservable<Users[]>
  user: any;
  constructor(private af: AngularFireDatabase) {
    this.users = this.af.list('/users') as FirebaseListObservable<Users[]>;
   }

  addUser(user){
    return this.users.push(user);
  }
 
  getUsers(user:string = null){
    if(user != null){
            this.users = this.af.list('/users/', {
                query: {
                    orderByChild: 'uid',
                    equalTo: user
                }
            }) as
            FirebaseListObservable<Users[]>
        } else {
            this.users = this.af.list('/users/') as
            FirebaseListObservable<Users[]>
        }
        
       return this.users;
  }

}

interface Users {
  companyname?:any;
  email?:any;
  role?:any;
  uid?:any;
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

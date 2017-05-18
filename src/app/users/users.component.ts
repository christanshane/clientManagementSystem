import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : FirebaseListObservable<any[]>;

  constructor(private firebaseService:FirebaseService) { 
    this.users = firebaseService.getUsers();
  }

  ngOnInit() {
    console.log(this.users);
  }

}

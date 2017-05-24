import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})


export class MembersComponent implements OnInit {
  name:any;
  state: string='';

  user:any;
  constructor(public afAuth:AngularFireAuth,
  private router:Router,
  private firebaseService:FirebaseService
  ) { 
    this.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.firebaseService.getUsers(this.afAuth.auth.currentUser.uid).subscribe(user =>{
        this.user = user;
        this.name = this.user[0].companyname;
        })
      }
    });
  }

  logout(){
    this.afAuth.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}

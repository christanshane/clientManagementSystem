import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})


export class MembersComponent implements OnInit {
  name:any;
  state: string='';

  constructor(public afAuth:AngularFireAuth, private router:Router) { 
    this.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.name = auth.email;
        console.log(auth.email);
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

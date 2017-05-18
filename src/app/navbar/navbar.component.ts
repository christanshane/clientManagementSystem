import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:any;

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

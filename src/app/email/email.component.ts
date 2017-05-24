import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  state: string ='';
  error: any;
  users: any;


  constructor(public afAuth:AngularFireAuth, private router:Router, private firebaseService:FirebaseService) {
    this.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.router.navigateByUrl('/members');
      }
    })
  }

  onSubmit(formData){
    if(formData.valid){
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password).then(
        (success) => {
          let userDetails = this.firebaseService.getUserDetails(formData.value.email);
          console.log(userDetails+" Show me this");
          // console.log('success');
          this.router.navigate(['/members']);
        }).catch(
        (err) =>{
          console.log(err);
        })
    }
  }

  

  ngOnInit() {
    this.firebaseService.getUsers().subscribe(users =>{
      this.users = users;
    })
  }

}

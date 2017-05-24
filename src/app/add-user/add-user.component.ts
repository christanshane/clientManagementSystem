import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from '../services/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name:any;
  state: string='';
  error: any;

  companyname:any;
  email:any;
  password:any;

  constructor(public afAuth:AngularFireAuth, private router:Router, private firebaseService: FirebaseService) { 
    this.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.name = auth.email;
        console.log(auth.email);
      }
    });
  }

  onSubmit(formData) {
    if(formData.valid) {

      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email,formData.value.password).then(
        (success) => {
          let user = {
            companyname: formData.value.companyname,
            email: formData.value.email,
            role: formData.value.role,
            uid: this.afAuth.auth.currentUser.uid
          }
        this.firebaseService.addUser(user);
        console.log(success);
        this.router.navigate(['/members'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  logout(){
    this.afAuth.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}

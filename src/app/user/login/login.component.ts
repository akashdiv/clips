import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  inSubmission = false;

  showAlert = false;
  alertMsg = 'Please Wait! we are loging you';
  alertColor = 'blue'

  async login(){

    this.showAlert = true;
    this.alertMsg = 'Please Wait! Your account is login';
    this.alertColor = 'blue'
    this.inSubmission = true;

    try{
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    }catch(e){
      console.error(e)
      this.inSubmission = false;
      this.alertMsg = 'You should try again';
      this.alertColor = 'red'

      return
    }

    this.alertMsg = 'Success! You are logged in';
    this.alertColor = 'green'
  }

}

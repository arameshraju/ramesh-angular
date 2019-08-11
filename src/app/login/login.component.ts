import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { AuthorizationService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  sighnupForm: FormGroup;
  authCodeForm: FormGroup;
  constructor(private loginBuilder: FormBuilder, private sighnupBuilder:FormBuilder,private auth: AuthorizationService, private _router: Router) {
    this.loginForm=loginBuilder.group({
      loginEmail:[null],
      loginPwd:[null]
    });
    this.sighnupForm=sighnupBuilder.group({
      signupEmail:[null],
      signupPwd1:[null],
      signupPwd2:[null]
    });
    this.authCodeForm=sighnupBuilder.group({
      authCodeText:[null]
    });
   }

  ngOnInit() {
  }
  loginSubmit(loginData){
    console.log(loginData);
    const email = loginData.loginEmail;
    const password =loginData.loginPwd;
    this.auth.signIn(email, password).subscribe((data) => {
      console.log(data);
      this._router.navigateByUrl('/home');
    }, (err)=> {
      console.log(err);
      // this.emailVerificationMessage = true;
    });   
  }
  signupSubmit(signupData){
    console.log(signupData);

    this.auth.register(signupData.signupEmail, signupData.signupPwd1).subscribe(
      (data) => {        
        console.log(data);
      },
      (err) => {
        console.log(err);
        // this.error = "Registration Error has occurred";
      }
    );
  }
  authCideSubmit(authCode){
    console.log(authCode);
    this.auth.confirmAuthCode(authCode.authCodeText).subscribe(
      (data) => {
        console.log(data);
        //this._router.navigateByUrl('/');
        //this.codeWasConfirmed = true;
        //this.confirmCode = false;
      },
      (err) => {
        console.log(err);
        console.log(err);
        //this.error = "Confirm Authorization Error has occurred";
      });
  }

}
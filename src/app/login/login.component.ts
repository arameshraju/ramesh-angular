import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { AuthorizationService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  sighnupForm: FormGroup;
  constructor(private loginBuilder: FormBuilder, private sighnupBuilder:FormBuilder,private auth: AuthorizationService) {
    this.loginForm=loginBuilder.group({
      loginEmail:[null],
      loginPwd:[null]
    });
    this.sighnupForm=sighnupBuilder.group({
      signupEmail:[null],
      signupPwd1:[null],
      signupPwd2:[null]
    });
   }

  ngOnInit() {
  }
  loginSubmit(loginData){
    console.log(loginData);
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

}
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  sighnupForm: FormGroup;
  constructor(private loginBuilder: FormBuilder, private sighnupBuilder:FormBuilder) {
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
  }

}
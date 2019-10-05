import { Injectable } from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserPool,CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { Observable, of } from 'rxjs';
import { Config } from '../services/config.service';

@Injectable()
export class AuthorizationService {
  cognitoUser: any;
   userPool : any;
    

  constructor(private config : Config) {
    this.userPool = new CognitoUserPool(config.AUTH);
   }

  register(email, password) {
    console.log(email);
    console.log(password);

    const attributeList = [];
  attributeList.push(new CognitoUserAttribute({
            Name: 'email',
            Value: email
        }));
    return Observable.create(observer => {
      this.userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          console.log("signUp error", err);
          observer.error(err);
        }

        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });

  }

  confirmAuthCode(code) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : this.userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(email, password) { 

    const authenticationData = {
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username : email,
      Pool : this.userPool
    };
    const cognitoUser = new CognitoUser(userData);
    
    return Observable.create(observer => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          
          console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  isLoggedIn() {    
    return this.userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    // gets the current user from the local storage
    return this.userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }
}
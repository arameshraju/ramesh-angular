import { Injectable } from "@angular/core";
@Injectable()
export class Config {
  AUTH = {
     UserPoolId: 'us-east-1_xxxxx', // Your user pool id here
     ClientId: 'xxxxx' // Your client id here
  };
  REST_API ="https://xxxxx.execute-api.us-east-1.amazonaws.com/xxxx/"; //Your Respoint url (satge)
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PatientService {
  patinet:{};
  patientList:[];
  constructor(private http: HttpClient) {
    this.http.get("https://7lwlhtws9c.execute-api.us-east-1.amazonaws.com/rameshStage/getpatientdata").subscribe( response=>{
        console.log(JSON.stringify( response));
    });;

   }
savePatient(data){
  console.log(data);
}
getPatient(param){
  return {};
}
getActivePatinetList(){
  return [];
}

}

import { Injectable } from '@angular/core';

import { AuthorizationService } from '../services/auth.service';

@Injectable()
export class PatientService {
  patinet:{};
  patientList:[];
  constructor(private auth : AuthorizationService) {

    auth.RestCall("test",{});

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

import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  patinet:{};
  patientList:[];
  constructor() { }
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

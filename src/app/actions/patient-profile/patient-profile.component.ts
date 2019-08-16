import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
   patientRegForm:FormGroup;
 
  constructor(private patientBuilder:FormBuilder,private patientService:PatientService ) {
    this.patientRegForm=patientBuilder.group({
      name:[null],
      gender:[null],
      age:[null],
      desc:[null]

    });
   }
 
  ngOnInit() {
  }
  onSave(data){
     this.patientService.savePatient(data);
  }

}
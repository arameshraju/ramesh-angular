import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
   patientRegForm:FormGroup;
 
  constructor(private patientBuilder:FormBuilder ) {
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
    console.log(data);
  }

}
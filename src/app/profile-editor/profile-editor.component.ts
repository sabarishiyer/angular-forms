import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(6)]),
    lastName: new FormControl(''),
  });
  
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
}

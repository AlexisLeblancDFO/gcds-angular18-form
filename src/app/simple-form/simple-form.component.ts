import { Component } from '@angular/core';
import {GcdsComponentsModule} from "@cdssnc/gcds-components-angular";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'simple-form',
  standalone: true,
  imports: [ GcdsComponentsModule, ReactiveFormsModule ],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss'
})
export class SimpleFormComponent {

  gcdsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.gcdsForm = this.formBuilder.group({
      labNumber: [null, Validators.required],
      species: [null, Validators.required],
      comment: [null, Validators.required]
    });
  }

  labNumber = undefined;
  species = undefined;
  comment = undefined;

  gcdsFormSubmit() {
    console.log(this.gcdsForm.controls);
    this.labNumber = this.gcdsForm.controls['labNumber'].value ?? 'null';
    this.species = this.gcdsForm.controls['species'].value ?? 'null';
    this.comment = this.gcdsForm.controls['comment'].value ?? 'null';
  }
}

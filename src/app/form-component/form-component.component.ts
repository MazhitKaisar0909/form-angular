import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IForm, IFormData } from './form.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})


export class FormComponentComponent {
  protected myGroup!: FormGroup<IForm>;
  constructor() {
    this.myGroup = new FormGroup<IForm>({
      firstName: new FormControl('', {
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl(null, { 
        validators: [Validators.required],
      }),
      zipCode: new FormControl(null, { 
        validators: [Validators.required],
      }),
      city: new FormControl('', {
        validators: [Validators.required],
      }),
      state: new FormControl('', {
        validators: [Validators.required],
      }),
      street1: new FormControl('', {
        validators: [Validators.required],
      }),
      street2: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {

  }

  protected onSubmit(): void {
    if (this.myGroup.invalid) {
      this.myGroup.markAllAsTouched();
      return;
    }

    const data: IFormData = {
      firstName: this.myGroup.value.firstName?.trim(),
      lastName: this.myGroup.value.lastName?.trim(),
      email: this.myGroup.value.email?.trim(),
      phone: this.myGroup.value.phone,
      zipCode: this.myGroup.value.zipCode,
      city: this.myGroup.value.city?.trim(),
      state: this.myGroup.value.state?.trim(),
      street1: this.myGroup.value.street1?.trim(),
      street2: this.myGroup.value.street2?.trim(),
    };
    console.log(data);
  }

}

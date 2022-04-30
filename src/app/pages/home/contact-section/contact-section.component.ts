import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  titleSection: string = 'Contacto'

  /************************** FORMULARIO  **************************/
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  phone: FormControl = new FormControl("");
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("");
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  googlesheet: string = 'https://script.google.com/macros/s/AKfycbzZ2GVxMirIuwiCld5h7aWB8rz1s9Dbybql4UaROYpiA2oru9H4-H-bkINFt2V0SAC8/exec';

  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {}

  onSubmit = (formDirective: FormGroupDirective) => {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      var formData: any = new FormData();
      formData.append("name", this.form.get("name")!.value);
      formData.append("email", this.form.get("email")!.value);
      formData.append("phone", this.form.get("phone")!.value);
      formData.append("message", this.form.get("message")!.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post(this.googlesheet, formData).subscribe(
          (res: any) => {
            if(res["result"] == 'success') {
              Swal.fire('Excelente', 'Tu mensaje ha sido enviado', 'success');
            } else {
              Swal.fire({icon: 'error', title: 'Oops...', text: 'Hubo un problema!'});
            }
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            setTimeout(() => this.submitted = false, 2000);
            formDirective.resetForm();
            this.form.reset();
            },
            (error) => {
              alert('Error')
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            setTimeout(() => this.submitted = false, 2000);
            console.log(error);
            }
        )
    } else {
      alert('No valid');
    }
  }

}

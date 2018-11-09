import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  registroForm: FormGroup
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {

    this.buildForm()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  buildForm() {
    this.registroForm = this.formBuilder.group({
      correo_electronico: ['',[Validators.email,Validators.required]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      fecha_nacimiento: ['',[Validators.required]],
      telefono: ['', [Validators.required,Validators]],
      constrasena: ['',[Validators.required]],
      confirm_contrasena: ['']
    },{validator: this.matchingPasswords('constrasena', 'confirm_contrasena')});
    this.registroForm.get('constrasena')
        .valueChanges
        .subscribe(value => {
        this.registroForm.updateValueAndValidity();
    })
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  resgistro(data) {
    console.log("form ",data);
  }

}

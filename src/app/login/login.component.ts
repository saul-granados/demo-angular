import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OauthService } from '../service/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected formLogin: FormGroup;

  constructor(private builder: FormBuilder,
    private service: OauthService){
    this.formLogin = this.builder.group({
      idUsuario: new FormControl(0),
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  get f() { return this.formLogin.controls } //accede a un objeto que contiene todos los controles del formulario

  protected onClickIngresar(): void {

    this.service.login(
      this.formLogin.get('usuario')?.value,
      this.formLogin.get('password')?.value,
    ).subscribe({
      next: (response) => {
        this.service.guardaToken(response.access_token);
      }
    })


  }
}

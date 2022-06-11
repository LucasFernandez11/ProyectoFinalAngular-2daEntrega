import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading:boolean = false;
  datoUsuario: string | null;

  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

    if(usuario === 'admin' && contraseña === '1234'){
      localStorage.setItem('rol','admin');
      this.datoUsuario = localStorage.getItem('rol');
      console.log(this.datoUsuario);

      this.cargando();

    }else if(usuario=== 'usuario' && contraseña =="1234")
      {
        localStorage.setItem('rol','usuario');
        this.datoUsuario = localStorage.getItem('rol');
        console.log(this.datoUsuario);
        this.cargando();
      }
      else
      this.error();
      this.form.reset();
    }
  

  error(){
    this._snackBar.open('Usuario o contraseña incorrecta','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    })
  }

  cargando(){
    this.loading=true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}

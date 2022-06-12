import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-crear-lista-estudiantes',
  templateUrl: './crear-lista-estudiantes.component.html',
  styleUrls: ['./crear-lista-estudiantes.component.scss']
})
export class CrearListaEstudiantesComponent implements OnInit {
 

  form: FormGroup;
  value: any = null;
  constructor(
               private fb : FormBuilder,
               private _estudiantesService: EstudiantesService,
               private router: Router,
               private _snackBar: MatSnackBar,

            ) {

                 const navigation = this.router.getCurrentNavigation();
                 this.value = navigation?.extras?.state;

    this.form = this.fb.group({
      estudiante:  ["",  [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
      edad:  ["",  [Validators.required]],
      correo: ["",  [Validators.required]],
       telefono:  ["", [Validators.required]],
    })
   }


  ngOnInit(): void {

  }

  guardar(){
    const estudiante: Estudiantes={
      id: this.form.value.id,
      nombre: this.form.value.estudiante,
      apellido: this.form.value.apellido,
      curso: this.form.value.curso,
      nota: this.form.value.nota,
      usuario: this.form.value.usuario,
    }

    this._estudiantesService.agregarEstudiante(estudiante);
    this.router.navigate(['/dashboard/estudiantes']);
    this._snackBar.open('Estudiante agregado exitosamente','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
    this.form.reset();
  }
  volver(){
    this.router.navigate(['/dashboard/estudiantes']);
    console.log(this.form.value);
  }

}

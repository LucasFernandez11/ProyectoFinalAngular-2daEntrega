import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { ListaEstudiantesService } from '../services/listaEstudiantes.service';

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
               private _estudiantesService: ListaEstudiantesService,
               private router: Router,
               private _snackBar: MatSnackBar,

            ) {

                 const navigation = this.router.getCurrentNavigation();
                 this.value = navigation?.extras?.state;

    this.form = this.fb.group({
      estudiante:  ["",  [Validators.required, Validators.maxLength(10)]],
      edad:  ["",  [Validators.required]],
      correo: ["",  [Validators.required]],
       telefono:  ["", [Validators.required]],
    })
   }


  ngOnInit(): void {

  }

  guardar(){
    const estudiante: EstudiantesLista={
      id: this.form.value.id,
      nombre: this.form.value.estudiante,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      correo: this.form.value.correo,
      telefono: this.form.value.telefono,
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

import { InscripcionesService } from './../../feature-estudiantes/services/inscripciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {  Inscripciones } from 'src/app/shared/interfaces/estudiantes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss']
})


export class CrearEstudianteComponent implements OnInit {
  cursos= new FormControl('');
  cursosList: any[] = ['react', 'angular', 'vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  form: FormGroup;
  value: any = null;
  constructor(
               private fb : FormBuilder,
               private _inscripcionesService: InscripcionesService,
               private router: Router,
               private _snackBar: MatSnackBar,

            ) { const navigation = this.router.getCurrentNavigation();
                 this.value = navigation?.extras?.state;

            this.form = this.fb.group({
              estudiante:  ["",  [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
              cursos:  ["",  [Validators.required]],
              dias: ["",  [Validators.required]],
              
            });
   }


  ngOnInit(): void {

  }

  guardar(){
    const estudiante: Inscripciones={
      id: this.form.value.id,
      nombre: this.form.value.estudiante,
      apellido: this.form.value.apellido,
      curso: this.form.value.curso,
      dias: this.form.value.dias,
     
    }

    this._inscripcionesService.agregarEstudiante(estudiante);
    this.router.navigate(['/dashboard/inscripciones']);
    this._snackBar.open('Estudiante agregado exitosamente','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
    this.form.reset();
  }
  volver(){
    this.router.navigate(['/dashboard/inscripciones']);
    console.log(this.form.value);
  }
}


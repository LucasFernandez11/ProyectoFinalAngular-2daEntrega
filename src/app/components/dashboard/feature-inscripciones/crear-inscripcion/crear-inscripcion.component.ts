import { InscripcionesService } from '../services/inscripciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationExtras } from '@angular/router';
import {  Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-crear-inscripciones',
  templateUrl: './crear-inscripcion.component.html',
  styleUrls: ['./crear-inscripcion.component.scss']
})


export class CrearInscripcionesComponent implements OnInit {
  
  cursos: any[] = ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
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
              estudiante:  ["",  [Validators.required, Validators.maxLength(40), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
              curso:  ["",  [Validators.required]],
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

    this._inscripcionesService.agregarInscripciones(estudiante);
    this.router.navigate(['/dashboard/inscripciones']);
    this._snackBar.open('Inscripcion creada exitosamente','', {
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


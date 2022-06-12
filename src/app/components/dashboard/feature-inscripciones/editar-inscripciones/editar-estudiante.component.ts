import { InscripcionesService } from './../../feature-estudiantes/services/inscripciones.service';

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes,Inscripciones  } from 'src/app/shared/interfaces/estudiantes';
import { CrearEstudianteComponent } from '../crear-inscripcion/crear-estudiante.component';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss']
})


export class EditarEstudianteComponent implements OnInit {
  cursos= new FormControl('');
  cursosList: any[] = ['react', 'angular', 'vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  form: FormGroup;
  value: any = null;
  
  constructor (public dialogRef: MatDialogRef<CrearEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripciones,  private fb : FormBuilder,
    private _inscripcionesService: InscripcionesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ){
      const navigation = this.router.getCurrentNavigation();
      this.value = navigation?.extras?.state;

   }

  ngOnInit(): void {
   this.inicializar(this.data);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editEstudiante(form:any){
    const formInscripciones: Inscripciones={
      id: this.data.id,
      nombre: this.form.value.estudiante,
      apellido: this.data.apellido,
      curso: this.form.value.curso,
      dias: this.form.value.dias,
     
    }

    this._inscripcionesService.editEstudiante(formInscripciones);
      this.router.navigate(['/dashboard/inscripciones']);
      this._snackBar.open('Estudiante editado exitosamente','', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 1500,
      })
      this.dialogRef.close();
      this.form.reset();
    }
volver(){      
  this.dialogRef.close();
}

inicializar(estudiante:Inscripciones) {

  this.form = this.fb.group({
    estudiante:  ["",  [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
    curso:  ["",  [Validators.required]],
    dias: ["",  [Validators.required]],
    
    })
  console.log(this.form);
  this.form.get('estudiante')?.patchValue(estudiante.nombre);
  this.form.get('curso')?.patchValue(estudiante.curso);
  this.form.get('dias')?.patchValue(estudiante.dias);
  
}
}

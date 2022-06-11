import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { CrearEstudianteComponent } from '../crear-estudiante/crear-estudiante.component';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss']
})


export class EditarEstudianteComponent implements OnInit {

  notas: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  form: FormGroup;
  value: any = null;
  nota:number;
  constructor (public dialogRef: MatDialogRef<CrearEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Estudiantes,  private fb : FormBuilder,
    private _estudiantesService: EstudiantesService,
    private router: Router,
    private _snackBar: MatSnackBar) {
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
    const formEstudiante: Estudiantes={
      id: this.data.id,
      nombre: this.form.value.estudiante,
      apellido: this.data.apellido,
      curso: this.form.value.curso,
      nota: this.form.value.nota,
      usuario: this.form.value.usuario,
    }

    this._estudiantesService.editEstudiante(formEstudiante);
      this.router.navigate(['/dashboard/estudiantes']);
      this._snackBar.open('Estudiante editado exitosamente','', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 1500,
      })
      this.form.reset();
  this.dialogRef.close();
    }
volver(){
      this.router.navigate(['/dashboard/estudiantes']);
      console.log(this.form.value);

}

inicializar(estudiante:Estudiantes) {

  this.form = this.fb.group({
    estudiante:  ["",  [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
    curso:  ["",  [Validators.required]],
    nota: ["",  [Validators.required]],
    usuario:  ["", [Validators.required]],
        })


  console.log(this.form);
  this.form.get('estudiante')?.patchValue(estudiante.nombre);
  this.form.get('curso')?.patchValue(estudiante.curso);
  this.form.controls["nota"].setValue(estudiante.nota);
  this.form.get('usuario')?.patchValue(estudiante.usuario);
}
}

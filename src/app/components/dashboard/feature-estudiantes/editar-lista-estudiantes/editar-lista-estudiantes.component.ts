import { ListaEstudiantesService } from './../services/listaEstudiantes.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { CrearListaEstudiantesComponent } from '../crear-lista-estudiantes/crear-lista-estudiantes.component';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-lista-estudiantes',
  templateUrl: './editar-lista-estudiantes.component.html',
  styleUrls: ['./editar-lista-estudiantes.component.scss']
})
export class EditarListaEstudiantesComponent implements OnInit {
  notas: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  form: FormGroup;
  value: any = null;
  nota:number;
  constructor (
    public dialogRef: MatDialogRef<CrearListaEstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudiantesLista,
    private fb : FormBuilder,
    private _estudiantesService: ListaEstudiantesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
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
    const formEstudiante: EstudiantesLista={
      id: this.data.id,
      nombre: this.form.value.estudiante,
      apellido: this.data.apellido,
      edad: this.form.value.edad,
      correo: this.form.value.correo,
      telefono: this.form.value.telefono,
    }
    this._estudiantesService.editEstudiante(formEstudiante);
      this.router.navigate(['/dashboard/estudiantes']);
      this._snackBar.open('Estudiante editado exitosamente','', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 1500,
      })
      this.dialogRef.close();
   
  }

  volver(){
      this.router.navigate(['/dashboard/estudiantes']);
      this.dialogRef.close();
      console.log(this.form.value);

  }

  inicializar(estudiante:EstudiantesLista) {
    this.form = this.fb.group({
      estudiante:  ["",  [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
      edad:  ["",  [Validators.required]],
      correo: ["",  [Validators.required]],
      telefono:  ["", [Validators.required]],
    })
    console.log(this.form);
    this.form.get('estudiante')?.patchValue(estudiante.nombre);
    this.form.get('edad')?.patchValue(estudiante.edad);
    this.form.controls["correo"].setValue(estudiante.correo);
    this.form.get('telefono')?.patchValue(estudiante.telefono);
    
  }

}

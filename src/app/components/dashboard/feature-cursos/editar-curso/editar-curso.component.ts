import { Cursos } from 'src/app/shared/interfaces/cursos';
import { CursosService } from '../services/cursos.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/components/material/material.module';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {
  cursos:any[]= ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  form: FormGroup;
  value: any = null;
  
  constructor (public dialogRef: MatDialogRef<CrearCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos,  private fb : FormBuilder,
    private _cursosService: CursosService,
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
    const formCursos: Cursos={
      id: this.data.id,
      cursoNombre: this.form.value.cursoNombre,
      cursoDias: this.form.value.cursoDias,
      precio: this.form.value.precio,
      profesor: this.form.value.profesor,
      detalle: this.form.value.detalle,
     
    }

    this._cursosService.editarCursos(formCursos);
      this.router.navigate(['/dashboard/cursos']);
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

inicializar(curso:Cursos) {

  this.form = this.fb.group({
    cursoNombre:  ["",  [Validators.required, Validators.maxLength(40), ]],
    cursoDias:  ["",  [Validators.required]],
    precio: ["",  [Validators.required]],
    profesor: ["",  [Validators.required]],
    detalle: ["",  [Validators.required]],
    
    })
  console.log(this.form);
  this.form.get('cursoNombre')?.patchValue(curso.cursoNombre);
  this.form.get('cursoDias')?.patchValue(curso.cursoDias);
  this.form.get('precio')?.patchValue(curso.precio);
  this.form.get('profesor')?.patchValue(curso.profesor);
  this.form.get('detalle')?.patchValue(curso.detalle);
  
}

}

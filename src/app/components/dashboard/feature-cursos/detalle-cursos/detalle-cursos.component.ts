import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.scss']
})
export class DetalleCursosComponent implements OnInit {
  detalle:Cursos;
  value: any = null;
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CrearCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos,
    private router: Router,
    private fb : FormBuilder,    
  ) {  
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.inicializar(this.data);
  }

  inicializar(curso:Cursos) {
    this.form = this.fb.group({
      cursoNombre:  curso.cursoNombre,
      cursoDias:  curso.cursoDias,
      precio: curso.precio,
      profesor: curso.profesor,
      detalle: curso.detalle,
    })
  }
  

  cerrar(){
    this.dialogRef.close();
}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

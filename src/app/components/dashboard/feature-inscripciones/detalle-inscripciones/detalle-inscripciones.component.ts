import { CrearListaEstudiantesComponent } from './../../feature-estudiantes/crear-lista-estudiantes/crear-lista-estudiantes.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';


@Component({
  selector: 'app-detalle-inscripciones',
  templateUrl: './detalle-inscripciones.component.html',
  styleUrls: ['./detalle-inscripciones.component.scss']
})
export class DetalleInscripcionesComponent implements OnInit {
  detalle: EstudiantesLista;
  value: any = null;
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CrearListaEstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripciones,
    private router: Router,
    private fb : FormBuilder,    
  ) {  
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.inicializar(this.data);
  }

  inicializar(estudiante:Inscripciones) {

    this.form = this.fb.group({
      estudiante:  estudiante.nombre,
     curso:  estudiante.curso,
      dias: estudiante.dias,
     
    })
  }
  

  cerrar(){
    
    this.dialogRef.close();
    

}

  onNoClick(): void {
    this.dialogRef.close();
    
  }


}

import { InscripcionesService } from './../../feature-inscripciones/services/inscripciones.service';
import { Cursos } from './../../../../shared/interfaces/cursos';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { CrearListaEstudiantesComponent } from '../crear-lista-estudiantes/crear-lista-estudiantes.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-delle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalle: EstudiantesLista;
  value: any = null;
  form: FormGroup;
  curso1:Cursos[]=[];
  constructor(
    public dialogRef: MatDialogRef<CrearListaEstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudiantesLista,
    private router: Router,
    private fb : FormBuilder,   
    private inscripcionesService: InscripcionesService 
  ) {  
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.curso1=[];
    this.inicializar(this.data);
  }

  inicializar(estudiante:EstudiantesLista) {
    this.curso1=this.inscripcionesService.misCursos(estudiante.id)
    this.form = this.fb.group({
      estudiante:  estudiante.nombre + " " + estudiante.apellido,
      edad:  estudiante.edad,
      correo: estudiante.correo,
      telefono:  estudiante.telefono,
      cursos: this.curso1,
    })
  }

  cerrar(){        
    this.dialogRef.close();
}

  onNoClick(): void {
    this.dialogRef.close();
    
  }

}

import { InscripcionesService } from './../../feature-estudiantes/services/inscripciones.service';
import { DetalleInscripcionesComponent } from '../detalle-inscripciones/detalle-inscripciones.component';
import { ListaEstudiantesService } from '../../feature-estudiantes/services/listaEstudiantes.service';
import { NavigationExtras, Router } from '@angular/router';

import { EstudiantesService } from '../../../../services/estudiantes.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes, Inscripciones } from 'src/app/shared/interfaces/estudiantes';
import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-inscripciones/editar-estudiante.component';
import { ListaEstudiantesComponent } from '../../feature-estudiantes/estudiantes/listaEstudiantes.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {


  datosUsuario: string;

  listaEstudiantes: Inscripciones[] = [];

  admin: boolean = false;


  displayedColumns: string[] = ['nombre', 'curso', 'dias', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( 
    
     private _inscripcionesService:InscripcionesService, 
     private _snackBar: MatSnackBar,
     private router: Router,
     public dialog: MatDialog
     )  { }

  ngOnInit(): void {
   
    this.loadView();
  }

  validaRol(){
    this.datosUsuario = JSON.stringify(localStorage.getItem('rol'));
    console.log(this.datosUsuario);

    if(localStorage.getItem('rol') === 'admin')
    {
      console.log("ES ADMIN")
      this.admin=true;

    }
    else{
    this.admin=false;
    console.log("ES USER")
    }
  }
  loadView(){
    this.cargarEstudiantes();
    this.validaRol()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  cargarEstudiantes(){
    this.listaEstudiantes = this._inscripcionesService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
    this.ngAfterViewInit();
  }

  eliminarEstudiante(index: number){
    console.log(index);
    this._inscripcionesService.eliminarEstudiante(index);
    this.cargarEstudiantes();
    this._snackBar.open('Estudiante eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  } 

  openDialog2(id_delform:number): void{
    const estudiante = this._inscripcionesService.getEstudiantes().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(DetalleInscripcionesComponent, {
      data: estudiante,
      width: '1250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarEstudiantes();
    });
  }

  editarEstudiante(id:number){
    this._snackBar.open('Registro de estudiante editado','', {
     horizontalPosition: 'center',
     verticalPosition: 'top',
     duration: 1500,
 })
}


 ingresarAdmin(){
  console.log("ACTIVANDO EL ADMIN")
   this.admin = true;
 }
 ingresarUsuario(){
   this.admin = false;
 }


 openDialog(id_delform:number): void {
  const estudiante = this._inscripcionesService.getEstudiantes().find(c => c.id === id_delform);
  const dialogRef = this.dialog.open(EditarEstudianteComponent, {
    data: estudiante,
    width: '1250px',

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.cargarEstudiantes();
  });
}

}

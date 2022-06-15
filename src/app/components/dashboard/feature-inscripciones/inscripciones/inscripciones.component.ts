import { InscripcionesService } from '../services/inscripciones.service';
import { DetalleInscripcionesComponent } from '../detalle-inscripciones/detalle-inscripciones.component';
import { NavigationExtras, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarInscripcionComponent } from '../editar-inscripciones/editar-inscripcion.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {


  datosUsuario: string;

    listaInscripciones: Inscripciones[] = [];

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
    this.cargarInscripciones();
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
  cargarInscripciones(){
    this.listaInscripciones = this._inscripcionesService.getInscripciones();
    this.dataSource = new MatTableDataSource(this.listaInscripciones);
    this.ngAfterViewInit();
  }

  eliminarInscripciones(index: number){
    console.log(index);
    this._inscripcionesService.eliminarInscripciones(index);
    this.cargarInscripciones();
    this._snackBar.open('Estudiante eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  } 

  openDialog2(id_delform:number): void{
    const estudiante = this._inscripcionesService.getInscripciones().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(DetalleInscripcionesComponent, {
      data: estudiante,
      width: '1250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarInscripciones();
    });
  }

  editarInscripcion(id:number){
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
  const estudiante = this._inscripcionesService.getInscripciones().find(c => c.id === id_delform);
  const dialogRef = this.dialog.open(EditarInscripcionComponent, {
    data: estudiante,
    width: '1250px',

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.cargarInscripciones();
  });
}

}

import { DetalleCursosComponent } from './../detalle-cursos/detalle-cursos.component';
import { CursosService } from '../services/cursos.service';
import {  Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';




@Component({
  selector: 'app-estudiantes',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  
  datosUsuario: string;

  listaCursos: Cursos[] = [];

  admin: boolean = false;
  

  displayedColumns: string[] = ['cursoNombre', 'cursoDias','precio','profesor', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( 
    
     private _cursosService:CursosService, 
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
    this.cargarCursos();
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
  cargarCursos(){
    this.listaCursos = this._cursosService.getCursos();
    this.dataSource = new MatTableDataSource(this.listaCursos);
    this.ngAfterViewInit();
  }

  eliminarCursos(index: number){
    console.log(index);
    this._cursosService.eliminarCursos(index);
    this.cargarCursos();
    this._snackBar.open('Estudiante eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  } 

  openDialog2(id_delform:number): void{
    const estudiante = this._cursosService.getCursos().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(DetalleCursosComponent, {
      data: estudiante,
      width: '1250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarCursos();
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
  const estudiante = this._cursosService.getCursos().find(c => c.id === id_delform);
  const dialogRef = this.dialog.open(EditarCursoComponent, {
    data: estudiante,
    width: '1250px',

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.cargarCursos();
  });
}

}

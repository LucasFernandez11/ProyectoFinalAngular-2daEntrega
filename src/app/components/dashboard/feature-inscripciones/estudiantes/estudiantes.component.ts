import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstudiantesService } from '../../../../services/estudiantes.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { ListaEstudiantesComponent } from '../../feature-estudiantes/estudiantes/listaEstudiantes.component';
import { MaterialModule } from 'src/app/components/material/material.module';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {


  datosUsuario: string;

  listaEstudiantes: Estudiantes[] = [];

  admin: boolean = false;


  displayedColumns: string[] = ['id','nombre', 'curso', 'nota', 'usuario', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private _estudiantesService: EstudiantesService,private _snackBar: MatSnackBar, private router: Router ,public dialog: MatDialog)  { }

  ngOnInit(): void {
    this.validaRol();
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
  }

  cargarEstudiantes(){
    this.listaEstudiantes = this._estudiantesService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarEstudiante(index: number){
    console.log(index);
    this._estudiantesService.eliminarEstudiante(index);
    this.cargarEstudiantes();
    this._snackBar.open('Estudiante eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
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

  const estudiante = this._estudiantesService.getEstudiantes().find(c => c.id === id_delform);
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


// verDetalle(id_delform:number): void {

//   const detalle = this.cursos.getEstudiantes().find(c => c.id === id_delform);
//   const dialogRef = this.dialog.open(EditarEstudianteComponent, {
//     data: estudiante,
//     width: '1250px',

//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     console.log(result);
//     this.cargarEstudiantes();
//   });
// }



}

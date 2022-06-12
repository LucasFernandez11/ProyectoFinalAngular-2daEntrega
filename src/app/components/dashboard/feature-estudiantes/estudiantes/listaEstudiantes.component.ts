import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { Router } from '@angular/router';
import { EditarEstudianteComponent } from '../../feature-inscripciones/editar-inscripciones/editar-estudiante.component';
import { ListaEstudiantesService } from '../services/listaEstudiantes.service';
import { EditarListaEstudiantesComponent } from '../editar-lista-estudiantes/editar-lista-estudiantes.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-reportes',
  templateUrl: './listaEstudiantes.component.html',
  styleUrls: ['./listaEstudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {
  admin:boolean = false;
  datosUsuario: string;

  listaCursos: Cursos[] = [];
  listaEstudiantes: EstudiantesLista[] = [];

  displayedColumns: string[] = ['nombre', 'edad', 'correo', 'telefono', 'acciones'];
  
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor  (    
    private _estudiantesListaService:ListaEstudiantesService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {}

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
    this.validaRol();
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
    this.listaEstudiantes = this._estudiantesListaService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
   this.ngAfterViewInit()
  }
  getCursos(){
     return this.listaCursos.slice();
  }
  getEstudiantes(){
     return this.listaEstudiantes.slice();
  }
  openDialog2(id_delform:number): void{
    const estudiante = this._estudiantesListaService.getEstudiantes().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(DetalleComponent, {
      data: estudiante,
      width: '1250px',
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarEstudiantes();
    });

  }

  openDialog(id_delform:number): void {
    const estudiante = this._estudiantesListaService.getEstudiantes().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(EditarListaEstudiantesComponent , {
      data: estudiante,
      width: '1250px',
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarEstudiantes();
    });
    
  }
  eliminarEstudiante(index: number){
    console.log(index);
    this._estudiantesListaService.eliminarEstudiante(index);
    this.cargarEstudiantes();
    this._snackBar.open('Estudiante eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  }

}

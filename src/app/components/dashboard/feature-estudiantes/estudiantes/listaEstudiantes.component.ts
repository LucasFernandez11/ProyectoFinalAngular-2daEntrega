import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/components/material/material.module';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './listaEstudiantes.component.html',
  styleUrls: ['./listaEstudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {

  constructor  (private _cursosService :CursosService) {}

  ListaCursos: Cursos[] = [];


  ngOnInit(): void {
    console.log(this._cursosService.ListaCursos)
  }


  getCursos(){
    return this.ListaCursos.slice();
  }

}

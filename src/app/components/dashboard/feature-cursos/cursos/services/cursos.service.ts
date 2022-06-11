import { Cursos } from './../../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  ListaCursos: Cursos[] = [
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},
    {id: 1, curso: "Valentina", horario:"Gomez", precio: 230000, profesor: "Ricardo"},


  ];
  constructor() { }

  getCursos(){
    return this.ListaCursos.slice();
  }

  eliminarCurso(index: number){
    this.ListaCursos.splice(index, 1);
  }

  editarCurso(curso: Cursos){
      const index = this.ListaCursos.findIndex(c => c.id === curso.id)
      this.ListaCursos[index] = curso;
  }

  agregarCurso(curso: Cursos){
    this.ListaCursos.unshift(curso);

  }

  editCurso(curso: Cursos) {


    const index = this.ListaCursos.findIndex(c => c.id === curso.id);
    this.ListaCursos[index] = curso;


  }
}

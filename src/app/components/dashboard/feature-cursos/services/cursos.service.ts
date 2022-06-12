import { Cursos } from '../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  ListaCursos: Cursos[] = [
    {id: 1, cursoNombre: "React.Js", cursoDias:"lunes y miercoles", precio: 230000, profesor: "Antonio Gallego", detalle:"Curso de react"},
    {id: 1, cursoNombre: "Angular", cursoDias:"martes y jueves", precio: 230000, profesor: "Marcelo Tinelli", detalle:"Curso de angular"},
    {id: 1, cursoNombre: "Vue.Js", cursoDias:"sabados", precio: 230000, profesor: "Ricardo Fort", detalle:"Curso de Vue"},
  ];
  constructor() { }

  getCursos(){
    return this.ListaCursos.slice();
  }

  eliminarCursos(index: number){
    this.ListaCursos.splice(index, 1);
  }

  editarCursos(curso: Cursos){
      const index = this.ListaCursos.findIndex(c => c.id === curso.id)
      this.ListaCursos[index] = curso;
  }

  agregarCursos(curso: Cursos){
    this.ListaCursos.unshift(curso);

  }  
  
}

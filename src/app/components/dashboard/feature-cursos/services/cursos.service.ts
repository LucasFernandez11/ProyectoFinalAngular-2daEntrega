import { Cursos } from '../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  ListaCursos: Cursos[] = [
    {id: 1, cursoNombre: "React.Js", cursoDias:"lunes y miercoles", precio: 230000, profesor: "Antonio Gallego", detalle:"Curso de react"},
    {id: 2, cursoNombre: "Angular", cursoDias:"martes y jueves", precio: 230000, profesor: "Marcelo Tinelli", detalle:"Curso de angular"},
    {id: 3, cursoNombre: "Vue.Js", cursoDias:"sabados", precio: 230000, profesor: "Ricardo Fort", detalle:"Curso de Vue"},
    {id: 4, cursoNombre: "Java", cursoDias:"Lunes, Martes, Miercoles, Viernes, Sabados", precio: 230000, profesor: "Ricardo Mollo", detalle:"Curso pesadisimo de Java"},
    {id: 5, cursoNombre: "Block chain", cursoDias:"sabados", precio: 40000, profesor: "Ricardo Fort", detalle:"Te vas a Miaaaameee"},
    {id: 6, cursoNombre: "Next.Js", cursoDias:"Juves", precio: 150000, profesor: "Juan Sinombre", detalle:"Curso de Next.Js"},
  ];

  curso: Cursos;
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

  maxId(curso:Cursos[]){
    return Math.max.apply(null,
      curso.map(function(o) { return o.id; }));
  }

  getCurso(ids:number){
    this.curso =this.ListaCursos[ids - 1];
    return this.curso;
  }
  
}

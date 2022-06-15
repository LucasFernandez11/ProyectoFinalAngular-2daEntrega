import { CursosService } from './../../feature-cursos/services/cursos.service';
import { Cursos } from './../../../../shared/interfaces/cursos';
import { Inscripciones } from './../../../../shared/interfaces/inscripciones';
import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones=  [
    {id:1,id_estudiante:1,id_curso:1,nombre: "Alberto ",apellido:"Fernandez",curso:'react',dias:"Lunes y Miercoles"},
    {id:2,id_estudiante:2,id_curso:2,nombre: "Mike ",apellido:"wasowsky",curso:'angular',dias:" Martes y Jueves"},
    {id:3,id_estudiante:3,id_curso:3,nombre: "El pepe", apellido:"Ballanti", curso:'vueJS',dias:"Lunes y Miercoles"},
    {id:4,id_estudiante:4,id_curso:4,nombre: "Micho ", apellido:"Chelo",curso:'angular',dias:"Martes y Jueves"},
    {id:5,id_estudiante:5,id_curso:5,nombre: "Tito ", apellido:"Fernandez", curso:'react',dias:"Lunes y Miercoles"},
    {id:6,id_estudiante:6,id_curso:6,nombre: "Negro ", apellido:"Del Plata", curso:'angular',dias:"sabado"},
    {id:7,id_estudiante:7,id_curso:7,nombre: "Cabezon",  apellido:"ChuacheNeger",curso:'vue.js',dias:"Lunes y Miercoles"},
    {id:8,id_estudiante:8,id_curso:8,nombre: "Rosa", apellido:"Meltrozo",curso:'react',dias:"Miercoles y Viernes"},
    {id:9,id_estudiante:9,id_curso:9,nombre: "Ana Liza", apellido:"Melano", curso:'vueJS',dias:"Lunes y Miercoles"},
    {id:10,id_estudiante:10,id_curso:10,nombre: "La Cristi",  apellido:"F de K",curso:'react',dias:"Martes y Jueves"}
  ];

  curso1:Cursos;
  constructor( private cursosService: CursosService) { }

  getInscripciones(){
    return this.inscripciones.slice();
  }

  eliminarInscripciones(index: number){
    this.inscripciones.splice(index, 1);
  }

  editarInscripciones(inscripcion: Inscripciones){
      const index = this.inscripciones.findIndex(c => c.id === inscripcion.id)
      this.inscripciones[index] = inscripcion;
  }

  agregarInscripciones(inscripcion: Inscripciones){
    this.inscripciones.unshift(inscripcion);

  }
  maxId(inscripciones:Inscripciones[]){
    return Math.max.apply(null,
      inscripciones.map(function(inscripcion) { return inscripcion.id; }));
  }


  misCursos(idEstudiante:number){
    let miscursos:Cursos[]= [];

       for(let i = 0; i < this.inscripciones.length; i++){
         if(this.inscripciones[i].id_estudiante===idEstudiante){
           
           this.curso1=this.cursosService.getCurso(this.inscripciones[i].id_curso)
           console.log(this.curso1);
             miscursos.push(this.curso1);
           }
}
    return miscursos;
  }

 
}

import { Estudiantes, EstudiantesLista,Inscripciones } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones=  [
    {id:1,nombre: "Juan Carlos",apellido:"Martinez",curso:'react',dias:"Lunes y Miercoles"},
    {id:2,nombre: "Juan Carlos",apellido:"Martinez",curso:'angular',dias:" Martes y Jueves"},
    {id:3,nombre: "Neri", apellido:"Ballanti", curso:'vueJS',dias:"Lunes y Miercoles"},
    {id:4,nombre: "Julio", apellido:"Rodriguez",curso:'angular',dias:"Martes y Jueves"},
    {id:5,nombre: "Juana", apellido:"Bustos", curso:'react',dias:"Lunes y Miercoles"},
    {id:6,nombre: "Mayra", apellido:"Sanchez", curso:'angular',dias:"sabado"},
    {id:7,nombre: "Pedro",  apellido:"Gimenez",curso:'vue.js',dias:"Lunes y Miercoles"},
    {id:8,nombre: "Paula", apellido:"Zuliani",curso:'react',dias:"Miercoles y Viernes"},
    {id:9,nombre: "Roberto", apellido:"Carlos", curso:'vueJS',dias:"Lunes y Miercoles"},
    {id:10,nombre: "Esteban",  apellido:"De la Torre",curso:'react',dias:"Martes y Jueves"}
  ];
  constructor() { }

  getEstudiantes(){
    return this.inscripciones.slice();
  }

  eliminarEstudiante(index: number){
    this.inscripciones.splice(index, 1);
  }

  editarEstudiante(estudiante: Inscripciones){
      const index = this.inscripciones.findIndex(c => c.id === estudiante.id)
      this.inscripciones[index] = estudiante;
  }

  agregarEstudiante(estudiante: Inscripciones){
    this.inscripciones.unshift(estudiante);

  }

  editEstudiante(estudiante: Inscripciones) {
    const index = this.inscripciones.findIndex(c => c.id === estudiante.id);
    this.inscripciones[index] = estudiante;


  }
}
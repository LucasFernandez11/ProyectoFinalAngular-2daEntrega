import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  ListaEstudiantes=  [
    {id:1,nombre: "Alberto ",apellido:"Fernandez", edad:25,telefono:115512215, correo: 'algo@ejemplo'},    
    {id:2,nombre: "Mike ",apellido:"wasowsky", edad:25,telefono:115512215, correo: 'algo@ejemplo'},    
    {id:3,nombre: "El pepe", apellido:"Ballanti", edad: 23, telefono: 156498714654 , correo: 'algo@ejemplo'},
    {id:4,nombre: "Micho ", apellido:"Chelo", edad: 19, telefono: 6516541645 , correo: 'algo@ejemplo'},
    {id:5,nombre: "Tito ", apellido:"Fernandez", edad: 29, telefono: 935484645454 , correo: 'algo@ejemplo'},
    {id:6,nombre: "Negro ", apellido:"Del Plata", edad: 35, telefono: 516546315 , correo: 'algo@ejemplo'},
    {id:7,nombre: "Cabezon",  apellido:"ChuacheNeger",edad: 41, telefono: 53165465, correo: 'algo@ejemplo'},
    {id:8,nombre: "Rosa", apellido:"Meltrozo", edad: 15, telefono: 154987987 , correo: 'algo@ejemplo'},
    {id:9,nombre: "Ana Liza", apellido:"Melano", edad: 31, telefono: 43654654, correo: 'algo@ejemplo'},
    {id:10,nombre: "La Cristi",  apellido:"F de K",edad:78 , telefono: 5465468547 , correo: 'algo@ejemplo'}
  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  editarEstudiante(estudiante: EstudiantesLista){
      const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
      this.ListaEstudiantes[index] = estudiante;
  }

  agregarEstudiante(estudiante: EstudiantesLista){
    this.ListaEstudiantes.unshift(estudiante);

  }

  editEstudiante(estudiante: EstudiantesLista) {
    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
    this.ListaEstudiantes[index] = estudiante;


  }
}
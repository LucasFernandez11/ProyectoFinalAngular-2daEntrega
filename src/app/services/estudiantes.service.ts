import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  ListaEstudiantes=  [
    // {id:1, nombre: "Juan Carlos",  apellido:"Martinez", inscripciones:[{id: 1, curso: "React", nota: 10}], usuario: 'jc345'}
  {id:2,nombre: "Juan Carlos",  apellido:"Martinez",curso: 'React', nota: 4 , usuario: 'jc345'},
   {id:3,nombre: "Neri", apellido:"Ballanti", curso: 'IA', nota: 10 , usuario: 'neri96'},
   {id:4,nombre: "Julio", apellido:"Rodriguez", curso: 'Datascience', nota: 5 , usuario: 'julio395'},
   {id:5,nombre: "Juana", apellido:"Bustos", curso: 'Angular', nota: 9 , usuario: 'juani23'},
     {id:6,nombre: "Mayra", apellido:"Sanchez", curso: 'Vue', nota: 6 , usuario: 'maygs'},
     {id:7,nombre: "Pedro",  apellido:"Gimenez",curso: 'Javascript', nota: 8 , usuario: 'pedrokpo'},
     {id:8,nombre: "Paula", apellido:"Zuliani", curso: 'React', nota: 1 , usuario: 'poli54'},
     {id:9,nombre: "Roberto", apellido:"Carlos", curso: 'UX/UI', nota: 4 , usuario: 'roberden'},
     {id:10,nombre: "Esteban",  apellido:"De la Torre",curso: 'Marketing', nota: 7 , usuario: 'estanki'}

  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  editarEstudiante(estudiante: Estudiantes){
      const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
      this.ListaEstudiantes[index] = estudiante;
  }

  agregarEstudiante(estudiante: Estudiantes){
    this.ListaEstudiantes.unshift(estudiante);

  }

  editEstudiante(estudiante: Estudiantes) {


    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
    this.ListaEstudiantes[index] = estudiante;


  }
}

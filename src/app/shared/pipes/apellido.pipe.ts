import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { EstudiantesComponent } from '../../components/dashboard/feature-inscripciones/estudiantes/estudiantes.component';
import { Estudiantes } from '../interfaces/estudiantes';
import { ListaEstudiantesComponent } from 'src/app/components/dashboard/feature-estudiantes/estudiantes/listaEstudiantes.component';


@Pipe({
  name: 'apellidoPipe'
})
export class ApellidoPipe implements PipeTransform {

  transform(value: Estudiantes){
    return value.apellido;
  }



}

@NgModule({
  declarations: [ApellidoPipe],
  exports: [ApellidoPipe],
  imports: [CommonModule]
})
export class ApellidoPipeModule {}

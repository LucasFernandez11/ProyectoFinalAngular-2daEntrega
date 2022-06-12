import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { InscripcionesComponent } from '../../components/dashboard/feature-inscripciones/inscripciones/inscripciones.component';
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

import { ListaEstudiantesComponent } from 'src/app/components/dashboard/feature-estudiantes/estudiantes/listaEstudiantes.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CrearListaEstudiantesComponent } from './crear-lista-estudiantes/crear-lista-estudiantes.component';
import { EditarListaEstudiantesComponent } from './editar-lista-estudiantes/editar-lista-estudiantes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,   
    RouterModule,
   
   ]
})
export class FeatureEstudiantesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { DetalleInscripcionesComponent } from './detalle-inscripciones/detalle-inscripciones.component';



@NgModule({
  declarations: [
    DetalleInscripcionesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,]
})
export class FeatureEstudiantesModule { }

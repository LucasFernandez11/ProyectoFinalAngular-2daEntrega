import { EditarInscripcionComponent } from './editar-inscripciones/editar-inscripcion.component';
import { CrearInscripcionesComponent } from './crear-inscripcion/crear-inscripcion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { DetalleInscripcionesComponent } from './detalle-inscripciones/detalle-inscripciones.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
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
    RouterModule
  ]
})
export class FeatureInscripcionesModule { }

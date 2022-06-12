import { DetalleComponent } from './feature-estudiantes/detalle/detalle.component';

import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CrearInscripcionesComponent } from './feature-inscripciones/crear-inscripcion/crear-inscripcion.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarInscripcionComponent } from './feature-inscripciones/editar-inscripciones/editar-inscripcion.component';

import { FooterComponent } from 'src/app/core/footer/footer.component';

import { ListaEstudiantesComponent } from './feature-estudiantes/estudiantes/listaEstudiantes.component';
import { InscripcionesComponent } from './feature-inscripciones/inscripciones/inscripciones.component';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { FeatureEstudiantesModule } from './feature-inscripciones/feature-inscripciones.module';
import { CrearListaEstudiantesComponent } from './feature-estudiantes/crear-lista-estudiantes/crear-lista-estudiantes.component';
import { EditarListaEstudiantesComponent } from './feature-estudiantes/editar-lista-estudiantes/editar-lista-estudiantes.component';





@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    CrearInscripcionesComponent,
    TwentyDirective,
    EditarInscripcionComponent,
    FooterComponent,   
    ListaEstudiantesComponent,
   InscripcionesComponent,
    CursosComponent,
    EditarListaEstudiantesComponent,
    CrearListaEstudiantesComponent,
    DetalleComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
   
    FeatureEstudiantesModule

  ], exports: [
    FeatureEstudiantesModule
  ]


})
export class DashboardModule { }

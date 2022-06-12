import { EditarCursoComponent } from './feature-cursos/editar-curso/editar-curso.component';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { InscripcionesComponent } from './feature-inscripciones/inscripciones/inscripciones.component';
import { DetalleInscripcionesComponent } from './feature-inscripciones/detalle-inscripciones/detalle-inscripciones.component';
import { EditarInscripcionComponent } from './feature-inscripciones/editar-inscripciones/editar-inscripcion.component';
import { ListaEstudiantesComponent } from 'src/app/components/dashboard/feature-estudiantes/estudiantes/listaEstudiantes.component';
import { DetalleComponent } from './feature-estudiantes/detalle/detalle.component';
import { EditarListaEstudiantesComponent } from './feature-estudiantes/editar-lista-estudiantes/editar-lista-estudiantes.component';
import { CrearCursoComponent } from './feature-cursos/crear-curso/crear-curso.component';

import { CrearListaEstudiantesComponent } from './feature-estudiantes/crear-lista-estudiantes/crear-lista-estudiantes.component';
import { FeatureEstudiantesModule } from './feature-estudiantes/feature-estudiantes.module';
import { FeatureCursosModule } from './feature-cursos/feature-cursos.module';
import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { FeatureInscripcionesModule } from './feature-inscripciones/feature-inscripciones.module';
import { CrearInscripcionesComponent } from './feature-inscripciones/crear-inscripcion/crear-inscripcion.component';
import { DetalleCursosComponent } from './feature-cursos/detalle-cursos/detalle-cursos.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    TwentyDirective,
    FooterComponent,
    CrearListaEstudiantesComponent,
    CrearInscripcionesComponent,
    CrearCursoComponent, 
    EditarListaEstudiantesComponent,   
    DetalleComponent,
    ListaEstudiantesComponent, 
    EditarInscripcionComponent,
    DetalleInscripcionesComponent,
    InscripcionesComponent,
    CursosComponent,   
    EditarCursoComponent,
    DetalleCursosComponent, 
    
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    FeatureInscripcionesModule,
    FeatureCursosModule,
    FeatureEstudiantesModule,
    ], exports: [
    MaterialModule,
    FeatureInscripcionesModule,
    FeatureCursosModule,
    FeatureEstudiantesModule, 
      
   
  ]


})
export class DashboardModule { }

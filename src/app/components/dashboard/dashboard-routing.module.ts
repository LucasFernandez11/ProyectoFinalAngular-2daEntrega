import { EditarCursoComponent } from './feature-cursos/editar-curso/editar-curso.component';
import { CrearListaEstudiantesComponent } from './feature-estudiantes/crear-lista-estudiantes/crear-lista-estudiantes.component';
import { CrearInscripcionesComponent } from './feature-inscripciones/crear-inscripcion/crear-inscripcion.component';
import { InscripcionesComponent } from './feature-inscripciones/inscripciones/inscripciones.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { ListaEstudiantesComponent } from './feature-estudiantes/estudiantes/listaEstudiantes.component';
import { CrearCursoComponent } from './feature-cursos/crear-curso/crear-curso.component';
import {FeatureInscripcionesModule} from './feature-inscripciones/feature-inscripciones.module';
import {FeatureEstudiantesModule} from './feature-estudiantes/feature-estudiantes.module';
import {FeatureCursosModule} from './feature-cursos/feature-cursos.module';

const routes: Routes = [
  {
    path: '',component: DashboardComponent, children: [
      {path: '', component: InicioComponent},
      {path: 'estudiantes', component: ListaEstudiantesComponent},
      {path: 'inscripciones', component: InscripcionesComponent},
      {path: 'crear-inscripcion', component: CrearInscripcionesComponent},    
      {path: 'crear-estudiante', component: CrearListaEstudiantesComponent},    
      {path: 'cursos', component: CursosComponent},
      {path: 'crear-cursos', component: CrearCursoComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
   
  ],
  exports: [
    RouterModule,
   
  ]
})
export class DashboardRoutingModule { }

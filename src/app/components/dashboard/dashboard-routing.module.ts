import { CrearEstudianteComponent } from './feature-inscripciones/crear-inscripcion/crear-estudiante.component';
import { InscripcionesComponent } from './feature-inscripciones/inscripciones/inscripciones.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { ListaEstudiantesComponent } from './feature-estudiantes/estudiantes/listaEstudiantes.component';

const routes: Routes = [
  {
    path: '',component: DashboardComponent, children: [
      {path: '', component: InicioComponent},
      {path: 'estudiantes', component: ListaEstudiantesComponent},
      {path: 'inscripciones', component: InscripcionesComponent},
      {path: 'crear-estudiante', component: CrearEstudianteComponent},    
      {path: 'cursos', component: CursosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

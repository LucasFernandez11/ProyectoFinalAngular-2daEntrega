import { CrearEstudianteComponent } from './feature-inscripciones/crear-estudiante/crear-estudiante.component';
import { EstudiantesComponent } from './feature-inscripciones/estudiantes/estudiantes.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { ListaEstudiantesComponent } from './feature-estudiantes/estudiantes/listaEstudiantes.component';

const routes: Routes = [
  {
    path: '',component: DashboardComponent, children: [
      {path: '', component: InicioComponent},
      {path: 'estudiantes', component: ListaEstudiantesComponent},
      {path: 'inscripciones', component: EstudiantesComponent},
      {path: 'crear-estudiante', component: CrearEstudianteComponent},
      {path: 'reportes', component: ReportesComponent},
      {path: 'cursos', component: CursosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

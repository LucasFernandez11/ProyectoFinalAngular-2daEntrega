
import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CrearEstudianteComponent } from './feature-inscripciones/crear-estudiante/crear-estudiante.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarEstudianteComponent } from './feature-inscripciones/editar-estudiante/editar-estudiante.component';
import { ApellidoPipeModule } from 'src/app/shared/pipes/apellido.pipe';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ListaEstudiantesComponent } from './feature-estudiantes/estudiantes/listaEstudiantes.component';
import { EstudiantesComponent } from './feature-inscripciones/estudiantes/estudiantes.component';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';





@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    CrearEstudianteComponent,
    TwentyDirective,
    EditarEstudianteComponent,
    FooterComponent,
    ReportesComponent,
    ListaEstudiantesComponent,
    EstudiantesComponent,
    CursosComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    ApellidoPipeModule

  ]


})
export class DashboardModule { }

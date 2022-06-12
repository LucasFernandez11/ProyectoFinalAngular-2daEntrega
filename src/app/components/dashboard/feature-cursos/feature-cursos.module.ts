import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    CursosComponent,
    CrearCursoComponent,
    EditarCursoComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class FeatureCursosModule { }

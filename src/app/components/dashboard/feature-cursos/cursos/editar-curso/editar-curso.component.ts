import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {
  public dataKey: any;

  constructor(@Inject(MAT_DIALOG_DATA) datakey: any, private estudiantesService: EstudiantesService)

  {this.dataKey = datakey }

  ngOnInit(): void {
  }

}

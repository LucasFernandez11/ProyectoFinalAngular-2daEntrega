import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearListaEstudiantesComponent } from './crear-lista-estudiantes.component';

describe('CrearListaEstudiantesComponent', () => {
  let component: CrearListaEstudiantesComponent;
  let fixture: ComponentFixture<CrearListaEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearListaEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearListaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

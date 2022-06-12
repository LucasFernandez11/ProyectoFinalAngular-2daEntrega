import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCursosComponent } from './detalle-cursos.component';

describe('DetalleCursosComponent', () => {
  let component: DetalleCursosComponent;
  let fixture: ComponentFixture<DetalleCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

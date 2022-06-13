import { MenuService } from '../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/menu';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  menu: Menu[]=[]
  admin: boolean = false;
  
  datosUsuario: string;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.loadView();
  }

  loadView(){
    this.cargarMenu();
    this.validaRol();
  }
  validaRol(){
    this.datosUsuario = JSON.stringify(localStorage.getItem('rol'));
    console.log(this.datosUsuario);

    if(localStorage.getItem('rol') === 'admin')
    {
      console.log("ES ADMIN")
      this.admin=true;

    }
    else{
    this.admin=false;
    console.log("ES USER")
    }
  }

  cargarMenu(): void {
    this.menuService.getMenu().subscribe(data => {
      // console.log(data) ;
      this.menu = data;
    });
  }


}

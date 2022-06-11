import { Menu } from '../../shared/interfaces/menu';
import { MenuService } from '../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu: Menu[]=[];
  // opened = false;
  admin: boolean = false;
  constructor(private menuService: MenuService ) { }

  ngOnInit(): void {
    this.loadView();
  }

  loadView(){
    this.cargarMenu();
  }

  cargarMenu(): void {
    this.menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }
  ingresarAdmin(){
    this.admin = true;
  }
  ingresarUsuario(){
    this.admin = false;
  }

}
